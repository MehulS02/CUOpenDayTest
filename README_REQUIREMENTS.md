# CU OPEN DAY EXCERCISE
# REQUIREMENTS FOR THE GIVEN CU OPEN DAY EXCERCISE
# OBJECTIVES
    To develop a dynamic, searchable and easy to access CU OPEN DAY EVENTS WEB App. The web app should  display topics and the events in a way to allow users to browse and filter associated events. It should be easy to use and access the data.

# Functional Requirements:
    1. Display Card Data- 
        --The data in the card had too much of information which was hard to understand/grasp. 
        --To make it easy to understand, the card now only displays image, title, description and a View Events Button.

    2. Modal Details-
        -- While clicking on the view events button - it opens the modal which shows the list of events of that school.
        -- To understand it better, the events are sorted by time.
        -- The modal also has a search input to filter out events by title/program type or short_description words.
        -- Modal can be closed.
        -- The search resets if modal is closed.

    3. Event modal description-
        --Each event displays the program type as a tag, Date & Time of the event, Title, short_ description, location and add to calendar.
        -- Short description helps to understand about the event and doesn't make the event modal to look like it has too much to read.
        -- Location shows the building and the room. It is in an anchor tag which leads to the location website link, which can help to understand the exact location.
        -- Add to calendar opens a google calendar, which creates a calendar event with Title, date and time, description of the event and location.

    4. Search functionality-
        -- Main page- the search function helps to filter by the topics. Shows no open day data found if topic entered doesn't match up.
        -- Events modal- the search helps to filter by program type, title or short_description. Shows no event found if the input doesn't match up.
        -- Both modal and main page has clear input sign inside search once someone starts typing. it clears the input value and the data starts to show again.

# Styling & UX Requirements:
 * Use Tailwind CSS for all layout and styling.
 * The code ensures consistent spacing, responsiveness and colour theme aligned with Cardiff University.
 * Cards, search filters and modals are small-screen friendly.
 * Buttons aligned at the bottom of the card
 * Ensures accessibility: input labels, ARIA attributes and alt texts.

# Technical Requirements:
 * Modular code:-
    main.ts- loads data and handles UI rendering.
    modal.ts- handles modal rendering and logic.
 * Error handling:-
    --shows message if -
        JSON fails to load.
        Search has no results.
    