

# ZoottelKeeper: A Zookeeper for your Zettelkasten folder

## What? 
The main idea of Zettelkasten is the links that connect your notes. However if you would like to organize your notes to folders, you have to set up and maintain an index Markdown file for each folder that contain all of the notes of the folder as links (wikilinks, internal md links etc.).
Which means that if you move a file to an other folder, your have to remove its link from the index file of the source folder, and add a link to the index file of the target folder. 

If you are struggling with the same problems (like me), ZoottelKeeper is your program. It watches your folder, catches the changes and updates your index files within every folder and subfolders.

## How does it work?
ZoottelKeeper watches the followings:

- _Creation_ of files in rootFolder and any subfolders within 
- _Deletion_ of files in rootFolder and any subfolders within 
- _Move_ a file among rootFolder to subFolders
- _Move_ a file among subfolders

After recognizing that one of these actions happened, it creates an index file within the affected (sub)folder if it still does not exists.

Its name is going to be **000_Index_of_\<folder>.md**. 

Then it writes the list of the files within that folder as wikistyled links. 

## Example

Assume that we have a Zettelkasten folder with 2 subfolders `FolderA` and `FolderB`.

1. If I create a note called `fileA` in `FolderA` then ZoottelKeeper creates an index file within `FolderA` called **000_Index_of_FolderA.md** with content: 
    - **[[fileA]]**
    - **[[000_Index_of_FolderA.md]]**

2. If the file is being moved from `FolderA` to `FolderB`, **000_Index_of_FolderB.md** is going to be created in `FolderB` with content

    - **[[fileA]]**
    - **[[000_Index_of_FolderA.md]]**

   and the content the existing index file in `FolderA` is going to be updated by removing the link of `fileA`:

    - **[[000_Index_of_FolderA.md]]**

3. If fileA is being deleted from `FolderB` then its link is going to be removed from **000_Index_of_FolderB.md**

## Tryout

If you don't want to try it out directly on your notes, just type `npm run start -- --rootFolder=./../testRootFolder` and check how it works with a test Folder. 

## Usage

1. clone or download ZottelKeeper
2. install Node 10.18.1
3. install the dependencies by running `npm i` in the root folder
4. compile the code by `npm run build`
5. start it by `npm run start -- --rootFolder=./../<relative path to your Zettelkasten folder>`
   
   (for instance, if you have a folder called `Notes` and you place `ZottelKeeper` as a subfolder of `Notes`, and your `Zettelkasten` is a subfolder in Notes as well, then your command should be `npm run start -- --rootFolder=./../../ZettelKasten`)

## Stop

You can stop it by `npm run stop`




