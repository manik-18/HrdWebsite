import React from 'react';

const Clubs = () => {
  // ... (your data and content)

  const mission =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis unde inventore quam eveniet minus dignissimos facilis asperiores, aut provident ipsa sed deleniti ab voluptatem. Saepe, tempore sapiente. Adipisci, repudiandae?";
const vision =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis unde inventore quam eveniet minus dignissimos facilis asperiores, aut provident ipsa sed deleniti ab voluptatem. Saepe, tempore sapiente. Adipisci, repudiandae?";

  const galleryImages = [
    "https://media.licdn.com/dms/image/C4E22AQHsgHNCtQGpAw/feedshare-shrink_1280/0/1673605695356?e=1697673600&v=beta&t=eEs5i6Z0VhHeSkXQbFXJSuEK_7EKyx6zZI4od3QwXQI",
    "https://media.licdn.com/dms/image/C4E22AQHsgHNCtQGpAw/feedshare-shrink_1280/0/1673605695356?e=1697673600&v=beta&t=eEs5i6Z0VhHeSkXQbFXJSuEK_7EKyx6zZI4od3QwXQI",
    "https://media.licdn.com/dms/image/C4E22AQHsgHNCtQGpAw/feedshare-shrink_1280/0/1673605695356?e=1697673600&v=beta&t=eEs5i6Z0VhHeSkXQbFXJSuEK_7EKyx6zZI4od3QwXQI",
    "https://media.licdn.com/dms/image/C4E22AQHsgHNCtQGpAw/feedshare-shrink_1280/0/1673605695356?e=1697673600&v=beta&t=eEs5i6Z0VhHeSkXQbFXJSuEK_7EKyx6zZI4od3QwXQI",
    "https://media.licdn.com/dms/image/C4E22AQHsgHNCtQGpAw/feedshare-shrink_1280/0/1673605695356?e=1697673600&v=beta&t=eEs5i6Z0VhHeSkXQbFXJSuEK_7EKyx6zZI4od3QwXQI",
    "https://media.licdn.com/dms/image/C4E22AQHsgHNCtQGpAw/feedshare-shrink_1280/0/1673605695356?e=1697673600&v=beta&t=eEs5i6Z0VhHeSkXQbFXJSuEK_7EKyx6zZI4od3QwXQI",
    // Add more coding-themed pictures as needed
  ];

// Define your competitions and winners data
const competitionsAndWinners = [
  {
    competitionName: "Coding Challenge 1",
    winnerName: "John Doe",
    image: "https://media.licdn.com/dms/image/C4E22AQHsgHNCtQGpAw/feedshare-shrink_1280/0/1673605695356?e=1697673600&v=beta&t=eEs5i6Z0VhHeSkXQbFXJSuEK_7EKyx6zZI4od3QwXQI", // Replace with the actual image URL
  },
  {
    competitionName: "Coding Challenge 2",
    winnerName: "Jane Smith",
    image: "https://media.licdn.com/dms/image/C4E22AQHsgHNCtQGpAw/feedshare-shrink_1280/0/1673605695356?e=1697673600&v=beta&t=eEs5i6Z0VhHeSkXQbFXJSuEK_7EKyx6zZI4od3QwXQI", // Replace with the actual image URL
  },
  {
    competitionName: "Coding Challenge 2",
    winnerName: "Jane Smith",
    image: "https://media.licdn.com/dms/image/C4E22AQHsgHNCtQGpAw/feedshare-shrink_1280/0/1673605695356?e=1697673600&v=beta&t=eEs5i6Z0VhHeSkXQbFXJSuEK_7EKyx6zZI4od3QwXQI", // Replace with the actual image URL
  },
  {
    competitionName: "Coding Challenge 2",
    winnerName: "Jane Smith",
    image: "https://media.licdn.com/dms/image/C4E22AQHsgHNCtQGpAw/feedshare-shrink_1280/0/1673605695356?e=1697673600&v=beta&t=eEs5i6Z0VhHeSkXQbFXJSuEK_7EKyx6zZI4od3QwXQI", // Replace with the actual image URL
  },
  // Add more competitions and winners as needed
];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto flex flex-col items-center">
          <br />
        <img
            src="https://media.licdn.com/dms/image/D4E03AQG3AnucUzeXwA/profile-displayphoto-shrink_800_800/0/1673601873420?e=1700092800&v=beta&t=mqd8GMswI58p7kDOI4f-uSyJXIF1KdjRObStw9fv6II"
            alt="Club Logo"
            className="h-20 w-20 rounded-full border-4 border-white mb-4 hover:scale-150 transition-transform duration-300 transform"
          />
          <h1 className="text-3xl font-semibold">Coding Club</h1>
          <p className="text-gray-300">Exploring grey matter</p>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="bg-white p-8 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Mission</h2>
          <p className="text-gray-700">{mission}</p>
        </section>

        <section className="bg-white p-8 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Vision</h2>
          <p className="text-gray-700">{vision}</p>
        </section>

        <section className="bg-white p-8 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <p className="text-gray-700">Check out some coding-themed images below:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image}
                  alt={`Coding Picture ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Competitions and Winners Section */}
        <section className="bg-white p-8 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Competitions and Winners</h2>
          <p className="text-gray-700">Check out some coding-themed images below:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {competitionsAndWinners.map((item, index) => (
              <div
                key={index}
                className="flex items-center"
              >
                <img
                  src={item.image}
                  alt={`Competition ${index + 1}`}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p className="text-lg font-semibold">{item.competitionName}</p>
                  <p className="text-gray-700">Winner: {item.winnerName}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2023 Coding Club
        </div>
      </footer>
    </div>
  );
};

export default Clubs;
