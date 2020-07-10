

# ZoottelKeeper: A Zookeeper for your Zettelkasten folder

## What? 
The main idea of Zettelkasten is the links that connect your notes. However if you would like to organize your notes to folders, you have to set up and maintain an index Markdown file for each folder that contain all of the notes of the folder as links (wikilinks, internal md links etc.).
Which means that if you move a file to an other folder, your have to remove its link from the index file of the source folder, and add a link to the index file of the target folder. 

If you are struggling with the same problems (like me), ZoottelKeeper is your program. It watches your folder, catches the changes and updates your index files within every folder and subfolders.

## Usage

1. clone or download ZottelKeeper
2. install Node 10.18.1
3. install the dependencies by running `npm i` in the root folder
4. compile the code by `npm run build`
5. start it by `npm run start -- --rootFolder=./../<relative folder to your Zettelkasten>`
   (for instance if you place ZottelKeeper to ./Zottelkeeper folder, and your Zettelkasten folder is ./ZettelKasten, then your command should be `npm run start -- --rootFolder=./../../ZettelKasten`)

## Stop

You can stop it by `npm run stop`




