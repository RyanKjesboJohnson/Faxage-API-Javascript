const axios = require('axios');

class Faxage {
    constructor(userName, companyId, password) {
        if (isNaN(companyId)) throw new Error('Company ID must be numeric only.');

        this.faxageApiUrl = "https://www.faxage.com/httpsfax.php";
        this.userName = userName;
        this.companyId = companyId;
        this.password = password;
    }

    setFaxNumber(faxNumber) {
        this.faxNumber = faxNumber.replace(/[^0-9]/g, '');
        if (this.faxNumber.length !== 10) throw new Error('Fax number must be 10 digits, numeric only.');
        return this;
    }

    setFaxContent(faxContent) {
        if (!faxContent) throw new Error('Fax Content is required.');
        this.faxContent = Buffer.from(faxContent).toString('base64');
        return this;
    }

    setRecipientName(recipientName) {
        if (recipientName.length > 32) throw new Error('Recipient name max is 32 char.');
        this.recipientName = recipientName;
        return this;
    }

    setJobId(jobId) {
        if (isNaN(jobId)) throw new Error('Job ID must be numeric only.');
        this.jobId = jobId;
        return this;
    }

    async sendFax() {
        const fields = {
            faxno: this.faxNumber,
            recipname: this.recipientName,
            'faxfiledata[0]': this.faxContent,
            operation: 'sendfax',
            'faxfilenames[0]': `${this.faxNumber}.html`,
            username: this.userName,
            company: this.companyId,
            password: this.password
        };

        const response = await this.curl(fields);
        if (response.toLowerCase().includes('jobid:')) {
            const jobIdArr = response.split(":");
            return jobIdArr[1].trim();
        } else {
            throw new Error(`Faxage returns error: ${response}.`);
        }
    }

    async getStatus() {
        const fields = {
            jobid: this.jobId,
            operation: 'status',
            username: this.userName,
            company: this.companyId,
            password: this.password
        };
        return await this.curl(fields);
    }

    async curl(parameters) {
        try {
            const response = await axios.post(this.faxageApiUrl, new URLSearchParams(parameters));
            return response.data;
        } catch (error) {
            throw new Error(`Failed retrieving '${this.faxageApiUrl}' because of '${error.message}'.`);
        }
    }
}

module.exports = Faxage;
