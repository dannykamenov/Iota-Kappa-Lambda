import { storage } from '@/firebase';

const uploadFiles = async (files: File[], title: string, year: number) => {
    const storageRef = storage.ref();
    // create folder under file name
    const uploadTask = files.map((file) => {
        const fileRef = storageRef.child(`${year}/${title}/library/${file.name}`);
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