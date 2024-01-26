// src/uploadFile.ts
import { storage } from '@/firebase';

const uploadFile = async (file: File, title: string, year: number) => {
    const storageRef = storage.ref();
    // create folder under file name
    const fileRef = storageRef.child(`${year}/${title}/${file.name}`);
    await fileRef.put(file);
    return fileRef.getDownloadURL();
};

export default uploadFile;
