# Programming Philippines

Programming Philippines website made with sveltekit :pray:.

---
### To add new members edit the ```src/lib/config/users.ts``` file:
 - Your github username
 - then your name
 - Avatar url is your github profile link

```ts
{
	name: "your name",
	avatarUrl: "github id", // why string? idk.
	githubUsername: "gthub username", // optional
},
```
Add it in the src/lib/config/users.ts

---
### To add new admin, edit the ```src/lib/config/admins.ts``` file.
- Your name
- The image is your github profile link.
- Position
- Description
- The flip field defaults to false that means the left side of card is your image, if it is true then your name, position, and description is on the left side. *Should we add socials link like linkedin or github?*

---
Current UI design in figma, we highly appreciate if you have any suggestions/changes for the UI.
[View the current PPH UI in Figma](https://www.figma.com/file/3eIEjxj7XELGjr4ljVxE1J/Programming-Philippines-UI?node-id=0%3A1&t=TMTHC4i5EqWVxoWp-1)