## TRY IT [HERE](https://meilleurtaux-clone.netlify.com/demande-simulation/credit-immobilier/step1)

This was a technical test to get the certification from [LeRéacteur](https://www.lereacteur.io/)
It took me about 5 days to complete this small replica of [meilleurtaux.com](https://www.meilleurtaux.com/demande-simulation/credit-immobilier/)

### Checkout the repositories for the : 
- [frontend](https://github.com/LKF92/meilleur-taux-frontend)
- [back-office](https://github.com/LKF92/meilleur-taux-backoffice)

### Use of :
- React Router
- [Vicopo API](https://vicopo.selfbuild.fr/) to build an autocomplete for french zipcode
- Persistence of data : you can leave the website, come back to it the next day, your choices will be saved and you will arrive where you left.
- Most fields are mandatory to go to the next step
- Custom progress bar to show your advancment in the form
- Once you've validated the form with your email, you will receive a summary by email (via Mailgun)
- Notary fees (step 6) are based on your choice in step 1
- Backend is deployed on Heroku
- A small backoffice was created to see and delete the estimate requests made through the form. You can access it at the bottom of the page ("accés admin") or via this [link](https://meilleurtaux-secretbackoffice.netlify.com/)
