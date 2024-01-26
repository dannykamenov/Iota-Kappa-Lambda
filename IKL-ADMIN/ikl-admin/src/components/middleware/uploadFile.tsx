// src/uploadFile.ts
import { storage } from '@/firebase';

const uploadFile = async (file: File, title: string) => {
    const storageRef = storage.ref();
    // create folder under file name
    const fileRef = storageRef.child(title);
    await fileRef.put(file);
    return fileRef.getDownloadURL();
};

export default uploadFile;
