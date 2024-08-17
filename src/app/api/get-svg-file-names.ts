import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default async function getSvgFileNames(
	req: NextApiRequest,
	res: NextApiResponse<string[]>
) {
	try {
		const directoryPath = path.join(process.cwd(), "public", "your-folder"); // Replace with your folder path
		const fileNames = fs.readdirSync(directoryPath);
		res.status(200).json(fileNames);
	} catch (error) {
		console.error(error);
		res.status(500).json([]); // Return an empty array on error
	}
}
