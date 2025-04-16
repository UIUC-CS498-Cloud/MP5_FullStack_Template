import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EventGrid from './components/EventGrid';
import AddEventForm from './components/AddEventForm';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Farmers Market',
      description: 'Shop fresh produce, local crafts, and homemade goods from community vendors.',
      location: 'Main Street Plaza',
      dateTime: 'Sat, April 20 · 9 AM – 2 PM',
      imageUrl: 'https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2021/08/farmers-market-produce-0812211.jpg',
    },
    {
      id: 2,
      title: 'Live Jazz Night',
      description: 'Experience an evening of smooth live jazz with local musicians and craft cocktails.',
      location: 'Downtown Bar & Grill',
      dateTime: 'Fri, April 19 · 8 PM',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/56b3ecb037013b708cbba177/1546878848948-Y9B8HAS8TRJYDD1X8VD1/41.jpg',
    },
    {
      id: 3,
      title: 'Spring Carnival',
      description: 'Family-friendly rides, games, food trucks, and live entertainment all day long.',
      location: 'City Park',
      dateTime: 'Sun, April 21 · 10 AM – 5 PM',
      imageUrl: 'https://visitlitchfield.com/wp-content/uploads/2024/03/carnival-1.jpg',
    },
    {
      id: 4,
      title: 'Outdoor Movie Night',
      description: 'Grab a blanket and enjoy a screening of a classic under the stars.',
      location: 'Lincoln Field',
      dateTime: 'Sat, April 20 · 7 PM – 10 PM',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0972/9458/files/Outdoor_movie_grande.jpg?v=1533094222',
    },
    {
      id: 5,
      title: 'Art Walk',
      description: 'Stroll through galleries and meet local artists during this self-guided tour.',
      location: 'Downtown Arts District',
      dateTime: 'Fri, April 19 · 5 PM – 9 PM',
      imageUrl: 'https://airportcabolimo.com/wp-content/uploads/2022/10/B129EEDD-5729-4F39-999B-6BA5C15E5A1C-1.jpg',
    },
    {
      id: 6,
      title: 'Dog Adoption Fair',
      description: 'Meet lovable rescue dogs and maybe find your new best friend!',
      location: 'Animal Haven Shelter',
      dateTime: 'Sat, April 20 · 10 AM – 3 PM',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg',
    },
    {
      id: 7,
      title: 'Sunset Yoga',
      description: 'Unwind with an outdoor yoga session set to calming music and a glowing sunset.',
      location: 'Riverside Lawn',
      dateTime: 'Thu, April 18 · 6 PM – 7 PM',
      imageUrl: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
    },
    {
      id: 8,
      title: 'Food Truck Fiesta',
      description: 'A celebration of global street food featuring over 15 gourmet food trucks.',
      location: 'Westside Plaza',
      dateTime: 'Fri, April 19 · 6 PM – 10 PM',
      imageUrl: 'https://cms.menutiger.com/wp-content/uploads/2024/04/lined-up-food-truck-beside-the-streets.jpg',
    },
    {
      id: 9,
      title: 'Vintage Car Show',
      description: 'Admire classic cars, meet collectors, and enjoy retro tunes and snacks.',
      location: 'Old Town Square',
      dateTime: 'Sun, April 21 · 11 AM – 4 PM',
      imageUrl: 'https://salmonhealth.com/wp-content/uploads/SAL-Car-Show-07-2023-blog.webp',
    },
    {
      id: 10,
      title: 'Book Fair & Signing',
      description: 'Shop new and used books, and meet local authors for signings and readings.',
      location: 'Central Library Courtyard',
      dateTime: 'Sat, April 20 · 11 AM – 3 PM',
      imageUrl: 'https://s.inyourpocket.com/gallery/238969.jpg',
    },
    {
      id: 11,
      title: 'Open Mic Poetry Night',
      description: 'Celebrate local voices and spoken word at our cozy café’s open mic night.',
      location: 'Bean & Verse Café',
      dateTime: 'Thu, April 18 · 7 PM – 9 PM',
      imageUrl: 'https://www.culturecalling.com/images/uploads/header_images/hammer__tongue_trending.jpeg',
    },
    {
      id: 12,
      title: 'Earth Day Cleanup',
      description: 'Volunteer to clean up local parks and learn about sustainability initiatives.',
      location: 'Greenway Trailhead',
      dateTime: 'Sun, April 21 · 9 AM – 12 PM',
      imageUrl: 'https://media.greenmatters.com/brand-img/PA6P8NlLf/0x0/earth-day-volunteer-cleanups-1618601848507.jpg',
    },
    {
      id: 13,
      title: 'Outdoor Science Demo',
      description: 'Fun, interactive science experiments for kids and families.',
      location: 'Science Museum Lawn',
      dateTime: 'Sat, April 20 · 1 PM – 3 PM',
      imageUrl: 'https://content-calpoly-edu.s3.amazonaws.com/cosam/1/images/Research_Magazine/outdoor-science-education-hero.jpg',
    },
    {
      id: 14,
      title: 'Community Potluck',
      description: 'Bring a dish to share and enjoy music, games, and good company.',
      location: 'Harmony Hall Courtyard',
      dateTime: 'Fri, April 19 · 6 PM – 8 PM',
      imageUrl: 'https://www.gsofarmersmarket.org/wp-content/uploads/2018/10/potluck.jpg',
    },
    {
      id: 15,
      title: 'Climbing Competition',
      description: 'Watch local climbers race the wall in this thrilling high-energy event.',
      location: 'Summit Climbing Gym',
      dateTime: 'Sat, April 20 · 4 PM – 7 PM',
      imageUrl: 'https://static01.nyt.com/images/2021/08/04/us/04olympics-briefing-womens-climbing/merlin_192643701_8ad9726d-d32e-4f04-9a58-24cfa013efc2-superJumbo.jpg',
    },
    {
      id: 16,
      title: 'Plant Swap & Workshop',
      description: 'Swap plants and learn how to care for succulents and tropical houseplants.',
      location: 'Botanical Pavilion',
      dateTime: 'Sun, April 21 · 1 PM – 4 PM',
      imageUrl: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1002573233%2F240645671027%2F1%2Foriginal.20250407-111225?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1244%2C622&s=5f2d3ddf72d80dd4225cac56cbe58216',
    },
    {
      id: 17,
      title: 'Street Art Showcase',
      description: 'Watch live mural painting, spray art battles, and graffiti performances.',
      location: 'Warehouse Row',
      dateTime: 'Sat, April 20 · 2 PM – 6 PM',
      imageUrl: 'https://beyondthestreets.com/cdn/shop/files/london-post-2.jpg?v=1678384041',
    },
    {
      id: 18,
      title: 'LEGO Build-Off',
      description: 'Friendly competition for all ages build creative LEGO structures.',
      location: 'Community Center Gym',
      dateTime: 'Sun, April 21 · 12 PM – 2 PM',
      imageUrl: 'https://media.wired.com/photos/5954a0ce267cf6013d251f4e/16:9/w_929,h_523,c_limit/HighRes_LEGO_DUPLO_bricks-ft.jpg',
    },
    {
      id: 19,
      title: 'Sunrise Hike',
      description: 'Join our early morning hike with guided meditation at the summit.',
      location: 'Eagle Rock Trail',
      dateTime: 'Sat, April 20 · 6 AM – 8 AM',
      imageUrl: 'https://mountain-hiking.com/wp-content/uploads/2022/11/Plan-Sunrise-Hike-5272.jpg',
    },
  ]);

  const handleAddEvent = (newEvent) => {
    setEvents(prev => [newEvent, ...prev]);
    setShowForm(false); // closes popup after adding
  };


  return (
    <div className="App">
      <Header />

      <div className="search-plus-bar">
        <SearchBar query={query} setQuery={setQuery} />
        <button className="plus-button" onClick={() => setShowForm(true)}>+</button>
      </div>

      <EventGrid query={query} events={events} />

      {/* Add Event Popup */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AddEventForm onAddEvent={handleAddEvent} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

