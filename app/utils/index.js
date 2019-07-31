const cloudinary = require("cloudinary");

function storeUpload(stream){
	cloudinary.config({
		cloud_name: 'oriondajv',
		api_key: '688143414765112',
		api_secret: 'fQIwOkTGe4CKNdTDoU0xJSslKAQ'
	});

	return new Promise((resolve,reject) => {
		const buffer =  cloudinary.v2.uploader.upload_stream((error,result) => {
			if(error) reject(error);
			resolve(result);
		});

		stream.pipe(buffer);
	});
}

module.exports = {
	storeUpload
};
