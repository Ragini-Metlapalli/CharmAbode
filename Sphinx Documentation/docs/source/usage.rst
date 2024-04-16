Installation Instructions
-------------------------

* **Download the Repository:** Download the project repository as a zip file from the following link: `CharmAbode <https://gitlab.com/truptikh2004/charmabode>`_. After downloading, extract all files from the zip archive.

* **Access Authentication Directory:** Navigate to the extracted repository and move into the authentication directory using the following command: cd authentication

* **Run the Development Server:** Execute the following command to run the development server: python manage.py runserver

* **Access the Website:** Once the server is running, open your web browser and go to the provided URL. You will be directed to the CharmAbode interface.

* `Demo Link <https://gitlab.com/truptikh2004/charmabode>`_

Tech Stack
-----------

* **Front-end:** 
#. **HTML**: Structured the website's content for a clear and organized layout.
#. **CSS**: Styled the elements to enhance the visual appeal and ensure a seamless user experience.
#. **JS**: Implemented interactive features, making the user interface dynamic and user-friendly.

* **3D Rendering:** 
#. Leveraged the power of Three.js for sophisticated 3D rendering. 
#. This library facilitated the creation of dynamic and visually appealing 3D objects, enhancing the overall design experience.

* **Back-end:** Django used for server-side logic and utilized Django's default SQL database for data management. 

* **Logo Design:**
#. Opted for Canva to design a distinctive and visually striking logo for the website. 
#. Canva's user-friendly interface and design tools contributed to the creation of a unique brand identity.

Project Flow (including features)
--------------------------------

* **Get Started Page:** 
#. Upon running the server, users are greeted with the "Get Started" page. 
#. Implemented a split carousel for an engaging introduction to the platform.

* **Authentication Page:** 
#. Users click "Get Started" to proceed to the authentication page
#. New users sign up, and existing users log in.
#. Implemented a toggle for seamless switching between sign-up and sign-in forms.

* **Create Design Page:** 
#. After successful login, users are directed to the "Create Design" page.
#. Users click "Create New Design" to initiate the design process.

* **Room Configuration:** 
#. Users input room dimensions and select objects for their virtual space.
#. Utilized Three.js for creating 3D objects (furniture) and room rendering.

* **Design Preview:** 
#. Users visualize the positioning of objects in the room.
#. Evaluate the aesthetics and arrangement of items.

* **Save Models:** 
#. Users can save their designs for future reference.
#. Access and revisit saved designs during subsequent visits.

Challenges and Learnings
------------------------

* Working as a team.

* CORS errors --> Cross Origin Resource Sharing errors.

* Building all the models from scratch as everything existing was paid.

* Fixing errors.


Limitations and Future Scope
----------------------------

* The existing furniture which we made using the three.js is in standard sizes.

* Explore the possibility of allowing users to select furniture of their desired sizes, enhancing personalization.

* Direct generation of 3d model rooms with furniture in proper locations making use Machine Learning.
