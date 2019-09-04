class Error {
    constructor(url) {
        this.url = url;
    }

    render() {
        return `<div>
                    <div id="title">\"${this.url}\"
                        <span style="color: #000; font-size: 20px"> is NOT FOUND!</span>
                    </div>
                </div>`;
    }
}

export default Error;