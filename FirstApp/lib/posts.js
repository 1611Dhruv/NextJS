import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostData = fileNames.map((file)=>{
        const id = file.replace('.md','');
        const fullFilePath = path.join(postsDirectory, file);
        const fileContent = fs.readFileSync(fullFilePath,'utf8');
        const matterResult = matter(fileContent);
        return{
            id,
          ...matterResult.data
        }
        
    });
    return allPostData.sort((a,b)=>{
        return new Date(b.date) - new Date(a.date);
    });

}