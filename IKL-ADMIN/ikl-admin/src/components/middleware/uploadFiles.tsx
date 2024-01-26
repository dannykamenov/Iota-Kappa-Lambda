import { storage } from '@/firebase';

const uploadFiles = async (files: File[], title: string) => {
    const storageRef = storage.ref();
    // create folder under file name
    const uploadTask = files.map((file) => {
        const fileRef = storageRef.child(`${title}/${file.name}`);
        return fileRef.put(file);
    });

    try {
        const results = await Promise.all(uploadTask);
        const urls = await Promise.all(
            results.map((result) => result.ref.getDownloadURL())
        );
        return urls;

    } catch (err) {
        console.log(err);
    }
};

export default uploadFiles;