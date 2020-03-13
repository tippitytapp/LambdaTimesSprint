// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div');
    header.classList.add("header");
    const dateSpan = document.createElement('span');
    dateSpan.classList.add("date");
    dateSpan.textContent = "March 28, 2019";
    header.append(dateSpan);
    const headerH1 = document.createElement('h1');
    headerH1.textContent = 'Lambda Times';
    header.append(headerH1);
    const tempSpan = document.createElement('span');
    tempSpan.classList.add("temp");
    tempSpan.textContent = "98°";
    header.append(tempSpan);

    return header;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.append(Header());
