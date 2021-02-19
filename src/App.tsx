import React from 'react';
import './App.css';
import Heading from './components/Heading';
import Places from './components/Places';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Heading />
      <div className='space' id='London'>
        <Places 
          img="https://blog.londonpass.com/wp-content/uploads/2018/03/london-at-night-feature-423x253.jpg"
          alt="London"
          title="World's Best City"
          cityName="London"
          countryName="England"
          mapLink="https://goo.gl/maps/9ToUdJeHe7vz3Wm36"
          paragraph="Ironically, London gives me peace. There is something about the hustle and bustle of the city that I enjoy. Also, there is also ALWAYS something to do!"
        />
      </div>
      <div id='Berlin'>
      <Places
        img="https://www.sebastian-grote.de/blog/wp-content/uploads/2018/04/Berlin_Panorama_bei_Nacht_Fernsehturm.jpg"
        alt="Berlin"
        title="Shoreditch on Steroids"
        cityName="Berlin"
        countryName="Germany"
        mapLink="https://goo.gl/maps/qNJCexeuYjvrGtzYA"
        paragraph="People are so free in Berlin and the city is rich in history and culture. It also has 200 museums, so you won't be lost for choice when exploring!"
      />
      </div>
      <div id='Paris'>
      <Places
        img="https://i.pinimg.com/originals/5b/25/de/5b25de341018863f7a23dad5d3238bb9.jpg"
        alt="Paris"
        title="Supposedly The World's Most Romantic City"
        cityName="Paris"
        countryName="France"
        mapLink="https://goo.gl/maps/Dk3PzzTi3DD2ZNWF7"
        paragraph="The language is beautiful and the slow-paced nature of the city is calming."
      />
      </div>
      <div id='Lagos'>
      <Places
        img="https://lagoscityreview.com/wp-content/uploads/2018/01/t.jpg"
        alt="Lagos"
        title="Africa's Most Populous City"
        cityName="Lagos"
        countryName="Nigeria"
        mapLink="https://goo.gl/maps/wWHCnTnx8vybxmpt5"
        paragraph="Where my heart truly resides. The perfect location for good vibes, good food and good people!"
      />
      </div>
      
      <Footer />
    </div>
  );
}


export default App;
