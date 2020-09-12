export default {
  main_screen: {
    tips: 'This project is created with the current latest version of nodeJS (version 10) and includes the latest versions of angular and typescript.' +
      'For styling purposes latest version of bootstrap is also included. You may use it or create your own styles.'
  },
  login: {
    tips: 'The provided component contains a login form with a basic style.',
    t1: '1. Finish the login implementation by using angular reactive forms.',
    t2: '2. Both fields are required while in the first field there will be an email validation.',
    t3: '3. Login button is disabled until the form is valid.',
    extra: 'Implementing a custom validation component will be considered a plus.'
  },
  list: {
    tips: 'This screen is the main screen of the test. In order to accomplish the following tasks you are free to install any libraries you want. If necessary you can change the existing css style. The requested icon library can be either installed in the project or be a reference from the web.',
    t1: '1. Create a separate \'header\' component which will stick at the top of the page having a title at the left and a logout button (showed with an icon) at the right. Logout button will navigate you to login page.',
    t2: '2. Below the instructions section, the page must contain a list of \'Books\'. Data of the books are provided under the assets/data folder.',
    t3: '3. Data must be assigned into a typescript class before showing in the list. The list must contain the following columns',
    t3_c: [
      'Column 1: Code, align-center',
      'Column 2: Title, align-left',
      'Column 3: Author, align-left',
      'Column 4: Published, align-center, date format dd/MM/yyyy',
      'Column 5: Pages, align-center, show an icon of your choice if the page number is <= 300 or > 300. on mouse hovering the icon the page size will be displayed as a tooltip.',
      'Column 6: Website, align-center, click to follow the link'
    ],
    t4: '4. By selecting a row in the list a popup window will appear presenting all the properties of the object in view mode.',
    t5: '5. Above the columns of the list there must be a header section with a title at the left, named as \'Books\' and a create button (showed with an icon) at the right.',
    t6: '6. Create button will open a popup window so as to insert a book object. You can implement the create form using either the angular reactive forms or two way binding \'[(ngModel)]\'. By saving and closing the popup the object must be added to the list.',
    t7: '7. The form must contain at least one required property so that a user cannot add an empty object. In addition the form control of the property \'published\' should open a datepicker to select a date.',
    extra: 'Applying modern and responsive style to the requested components will be considered a plus.'
  }
};
