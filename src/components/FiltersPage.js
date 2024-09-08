import React from 'react';
import './Sentence.css';
import SentenceWithEmphasis from './SentenceWithEmphasis';
import SentenceWithLink from './SentenceWithLink';
import celebHeightIcon from '../assets/filterIcons/celebHeight.png';
import floridaMan from '../assets/filterIcons/floridaMan.png';
import crumbl from '../assets/filterIcons/crumbl.png';
import fallDay from '../assets/filterIcons/fallDay.png';
import heightPercentile from '../assets/filterIcons/heightPercentile.png';
import whatHoliday from '../assets/filterIcons/whatHoliday.png';
import gasStation from '../assets/filterIcons/gasStation.png';
import cavaOrder from '../assets/filterIcons/cavaOrder.png';
import mcOrder from '../assets/filterIcons/mcorder.png';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const replacements = [
  { customWord: "Meghan Trainor", url: "https://www.tiktok.com/embed/7379367110406966571" },
  { customWord: "Alex Warren", url: "https://www.tiktok.com/embed/7378590190643744042" },
  { customWord: "Joe Mele", url: "https://www.tiktok.com/embed/7378607033312054574" },
  { customWord: "Olivia Ponton", url: "https://www.tiktok.com/embed/7409415003893239071"}
];

function FiltersPage() {
    return (
      <div className="Home">
        <div className="top-header">
          <div className="name">Filters</div>
          <div className="social-links">
            <a href="https://www.tiktok.com/@rubywermfilters" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="icon1" icon={faTiktok} size="1x"/>
            </a>
          </div>
        </div>
        <div style={{lineHeight: 1.5}}>
          <div className="filter-sentence">
            <SentenceWithEmphasis sentence="What if your campaign drove 50 million views, 30 thousand posts, and 4 million likes?" underlinedWords={["50 million views", "30 thousand posts", "4 million likes"]} />
          </div>
          <div>
            {/* <SentenceWithLink sentence="Included Meghan Trainor, Alex Warren, and Joe Mele?" underlinedWords={["Meghan Trainor", "Alex Warren", "Joe Mele"]} /> */}
            <SentenceWithLink sentence={"Included Meghan Trainor, Alex Warren, Joe Mele, and Olivia Ponton?"} replacements={replacements} />
          </div>
          <div>
            <SentenceWithEmphasis sentence="For a fraction of the price of a traditional campaign?" underlinedWords={["fraction"]} />
          </div>
        </div>
        <div style={{marginTop: '50px'}}>
          <span>Let's talk Tiktok Effects</span>
        </div>
        <div className="filter-container">
          <a href="https://www.tiktok.com/effect/CELEBRITY-HEIGHTS-326562171" target="_blank" rel="noopener noreferrer">
            <img className="hover-image" src={celebHeightIcon} alt="Celebrity Height Effect Icon" />
          </a>
          <a href="https://www.tiktok.com/effect/FLORIDA-MAN-BIRTHDAY-320222374" target="_blank" rel="noopener noreferrer">
            <img className="hover-image" src={floridaMan} alt="Florida Man Effect Icon" />
          </a>
          <a href="https://www.tiktok.com/effect/CRUMBL-ORDER-653338020" target="_blank" rel="noopener noreferrer">
            <img className="hover-image" src={crumbl} alt="Crumbl Cookie Effect Icon" />
          </a>
          <a href="https://www.tiktok.com/effect/PERFECT-FALL-DAY-653249467" target="_blank" rel="noopener noreferrer">
            <img className="hover-image" src={fallDay} alt="Fall Day Effect Icon" />
          </a>
          <a href="https://www.tiktok.com/effect/HEIGHT-PERCENTILE-326562511" target="_blank" rel="noopener noreferrer">
            <img className="hover-image" src={heightPercentile} alt="Height Percentile Effect Icon" />
          </a>
          <a href="https://www.tiktok.com/effect/HOLIDAY-BIRTHDAY-322682203" target="_blank" rel="noopener noreferrer">
          <img className="hover-image" src={whatHoliday} alt="Holiday Birthday Effect Icon" />
          </a>
          <a href="https://www.tiktok.com/effect/GAS-STATION-ORDER-341329859" target="_blank" rel="noopener noreferrer">
          <img className="hover-image" src={gasStation} alt="Gas Station Effect Icon" />
          </a>
          <a href="https://www.tiktok.com/effect/CAVA-ORDER-677689494" target="_blank" rel="noopener noreferrer">
          <img className="hover-image" src={cavaOrder} alt="Cava Order Effect Icon" />
          </a>
          <a href="https://www.tiktok.com/effect/McOrder-605118326" target="_blank" rel="noopener noreferrer">
          <img className="hover-image" src={mcOrder} alt="McOrder Effect Icon" />
          </a>
        </div>
      </div>
    );
  }

  export default FiltersPage;