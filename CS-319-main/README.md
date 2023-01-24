# CS-319
2022-2023 Fall CS 319 Term Project

Section 3
Mehmet Feyyaz Küçük - 22003550
Ender Utlu - 22001983
Yunus Eren Türkeri - 22001842
Ege Ayan - 22002478
Alp Ertan - 22003912

Login feature:
Mail API to send the initial passwords to users for them to login along with their school email. There will be different types of accounts depending on their level of access such as candidate account, department coordinator account, and admin account.

Profile feature:
The profile will contain email, name, phone number, date of birth, gender, about me, and etc. Some of this information will be filled out for the users. But the users need to fill out the rest. Users will be able to update their profile picture and password. 

TODO List feature:
TODO list is only visible to department coordinators. TODO list will make it easier for the coordinator to see at which stage the candidate is at. They will be able to perform various actions depending on the candidate’s stage.

Notifications feature:
One of the biggest problems of the current Erasmus system is lack of communication between candidates and coordinators. Since it can be tedious for coordinators to communicate with every candidate, coordinators can post important announcements that will be visible to candidates. Announcements will also be send to candidates via noreply mail.

My Applications feature:
If the users are eligible for Erasmus (CGPA >= 2.5) or Exchange (CGPA >= 3), they will be able to apply to any of these programs during the application period. Users will have to fill in the necessary boxes including credentials and choice of universities for the application form. Automatic application form will be formed inside the system via fetching the candidate data in the pre-filled boxes. The students will be able to request the ready application form by pressing the “export pdf” button. Statement of Purpose For Erasmus file can be uploaded as pdf format to the application system. Candidates who completed their application will be added to the respective department coordinator’s TODO List as “Approved”. After that, the candidate can continue with the rest of their application.

Roadmap feature:
Additionally, since the applying phase can be complicated, each candidate will have a roadmap to guide them through that application. When a candidate applies for a program, the respective coordinator will be able to view their roadmap. Roadmap might contain steps such as “Fill out the application form”, “Upload a Statement of Purpose”, etc.

