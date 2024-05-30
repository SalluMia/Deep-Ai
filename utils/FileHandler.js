import { v4 as uuidv4 } from "uuid";
import { google } from "googleapis";
import os from "os";
import fs from "fs"
import path from "path";
import { writeFile } from "fs/promises";

const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL;
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
});


export async function fileUpload(file) {
    if (file instanceof Blob || file instanceof File) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        console.log("Buffer Response : ", buffer);
        const System = os.type();

        let filePath;
        if (System === "Windows_NT") {
            filePath = path.join("C:/", "WINDOWS/Temp", file.name);
        } else {
            filePath = path.join("/", "tmp", file.name);
        }
        await writeFile(filePath, buffer);

        const uniqueFilename = `${Date.now()}_${uuidv4()}_${file.name.replace(/\s+/g, '_')}`;
        const googleResponse = await drive.files.create({
            resource: {
                name: uniqueFilename,
                parents: 'xxxxxxxxsamplefolderidxxxx'
            },

            requestBody: {
                name: uniqueFilename, //This can be name of your choice
                // mimeType: 'image/jpg',
            },
            media: {
                // mimeType: 'image/jpg',
                body: fs.createReadStream(filePath),
            },
            fields: "id,webViewLink",
        });
        console.log(googleResponse.data.id);

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error("Error removing file:", err);
            }
        });

        await drive.permissions.create({
            fileId: googleResponse.data.id,
            requestBody: {
                role: 'reader',
                type: 'anyone',
            },
        });

        /* 
        webViewLink: View the file in browser
        webContentLink: Direct download link 
        */
        const stringValue = await drive.files.get({
            fileId: googleResponse.data.id,
            fields: 'webViewLink, webContentLink',
        });
        console.log(stringValue.data.webViewLink);

        const storedFileData = {
            fileLink: stringValue.data.webViewLink,
            fileId: googleResponse.data.id
        }

        return storedFileData;
    }
    return null
}


export async function fileDelete(fileId) {
    const deleteResponse = await drive.files.delete({
        supportsTeamDrives: 'false',
        fileId: fileId,
    });

    console.log(deleteResponse);

}