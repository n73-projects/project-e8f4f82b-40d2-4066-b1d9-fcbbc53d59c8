import { useState } from 'react';
import { Phone, Clock, MapPin, Car, Calendar } from 'lucide-react';
import { Button } from './components/ui/button';

function App() {
  const [activeSection, setActiveSection] = useState('hem');

  const navigation = [
    { id: 'hem', label: 'HEM' },
    { id: 'akuttandvard', label: 'AKUTTANDVÅRD' },
    { id: 'priser', label: 'PRISER' },
    { id: 'gdpr', label: 'GDPR' },
    { id: 'covid', label: 'COVID-19' },
    { id: 'kontakt', label: 'KONTAKT' },
  ];

  const openingHours = [
    { day: 'Måndag', hours: '07:30 - 21:00*' },
    { day: 'Tisdag', hours: '07:30 - 21:00*' },
    { day: 'Onsdag', hours: '07:00 - 21:00*' },
    { day: 'Torsdag', hours: '07:30 - 21:00*' },
    { day: 'Fredag', hours: '07:30 - 21:00*' },
    { day: 'Lördag & Söndag', hours: '07:30 - 21:00*' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'hem':
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
              <h1 className="text-4xl font-bold mb-4">Solna Family Dental</h1>
              <p className="text-xl mb-6">Akut tandvård Stockholm - Snabb Akuttid i Alla Dagar</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Akuttandvård: 070 6- 47 95 00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Tidbokning: 08 - 68 43 91 00</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5" />
                <span>Växlarevägen 45, Solna</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5" />
                <span>Fri parkering</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">Akut tandvård Stockholm</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Snabb Akuttid i Alla Dagar</strong>
                  </p>
                  <p className="text-gray-600 mb-4">
                    07:30-21:00* Tel: 0706-47 95 00
                  </p>
                  <p className="text-gray-600 mb-4">
                    Växlarevägen 45 Solna
                  </p>
                  <p className="text-lg font-semibold text-blue-700 mb-4">
                    Tandläkare Kvällar och Helger
                  </p>
                  <p className="text-red-600 font-semibold mb-4">
                    Akuttandvård endast tidbokning!
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Tandjouren - Tandakuten Mån-Sön</h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-700">• Har du tandvärk? Har du andra akuta tandbesvär?</p>
                    <p className="text-gray-700">• Lossnad fyllning / krona / bro?</p>
                    <p className="text-gray-700">• Problem med visdomstand?</p>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Boka en akuttid hos vår tandläkare / jourtandläkare
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    Betalning sker efter varje behandlingstillfälle Kort/Swish. Vi har ingen fakturahantering!
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Om Solna Family Dental</h3>
                  <p className="text-gray-700 mb-4">
                    Solna Family Dental är en privat tandläkarklinik, ansluten till Försäkringskassa och belägen i Solna nära Stockholm.
                    En modern klinik med den senaste utrustningen. Hos oss är du i centrum och delaktig i behandlingen.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Akut behov av tandvård är aldrig en välkomnande upplevelse för patienten. Lyckligtvis kan du lita på våra
                    omhändertagande tandläkare för din akutvård. Vid vår klinik, behandlar vi akuta patienter med vänlighet och respekt,
                    och vi kan ofta lindra smärta samma dag.
                  </p>
                  <p className="text-gray-700">
                    Solna Family Dental tar emot dig när du inte kan vänta. Vi har alltid akuttider när du har ont eller behöver
                    omedelbar hjälp; vi tycker att det ingår i vårt ansvar som tandläkare. En värkande tand, en tappad lagning
                    eller krona, inflammation; det är du som avgör när situationen är akut och då ordnar vi en tid till dig.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Opening Hours */}
                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    ÖPPETTIDER
                  </h3>
                  <div className="space-y-2">
                    {openingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="font-medium">{schedule.day}</span>
                        <span>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    *Efter överenskommelse per telefon<br />
                    Akuttandvård erbjuds samma dag.
                  </p>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-red-800 mb-4">Akuttid samma dag!</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-red-600" />
                      <span>0706-47 95 00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-red-600" />
                      <span>08-68 43 91 00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span>Växlarevägen 45, Solna</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  Boka Akuttid
                </Button>
              </div>
            </div>
          </div>
        );

      case 'akuttandvard':
        return (
          <div className="space-y-8">
            <div className="bg-red-50 border border-red-200 p-8 rounded-lg">
              <h1 className="text-3xl font-bold text-red-800 mb-6">Akuttandvård</h1>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-red-700 mb-4">Kontakta oss omedelbart:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-red-600" />
                      <span className="font-semibold">070 6- 47 95 00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-red-600" />
                      <span className="font-semibold">08 - 68 43 91 00</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-700 mb-4">Öppettider:</h3>
                  <p className="text-red-600 font-semibold">07:30 - 21:00*</p>
                  <p className="text-sm text-gray-600">*Efter överenskommelse per telefon</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Akuta tandproblem vi behandlar:</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Svår tandvärk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Lossnad fyllning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Lossnad krona eller bro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Problem med visdomstand</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Tandtrauma och skador</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Inflammation i munnen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Akut tandköttsproblem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Andra akuta tandbesvär</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Viktigt att veta:</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Akuttandvård endast efter tidbokning</li>
                <li>• Akuttider erbjuds samma dag</li>
                <li>• Betalning sker efter varje behandling (Kort/Swish)</li>
                <li>• Vi har ingen fakturahantering</li>
                <li>• Jourmottagning kvällar och helger</li>
              </ul>
            </div>
          </div>
        );

      case 'kontakt':
        return (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-6">Kontakt</h1>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h2 className="text-xl font-bold text-blue-800 mb-6">Kontaktinformation</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Klinikens namn:</h3>
                    <p className="text-gray-700">Solna Family Dental AB</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Adress:</h3>
                    <p className="text-gray-700">Växlarevägen 45, Solna</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Telefonnummer:</h3>
                    <div className="space-y-1">
                      <p className="text-gray-700">Akuttandvård: <span className="font-semibold">070 6- 47 95 00</span></p>
                      <p className="text-gray-700">Tidbokning: <span className="font-semibold">08 - 68 43 91 00</span></p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Specialiteter:</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Akuttandvård</li>
                      <li>• Allmän tandvård</li>
                      <li>• Jourmottagning kvällar och helger</li>
                      <li>• Akuttider samma dag</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Parkering:</h3>
                    <p className="text-gray-700">Fri parkering tillgänglig</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <h2 className="text-xl font-bold text-blue-800 mb-6">Öppettider</h2>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-800">{schedule.day}</span>
                      <span className="text-gray-700">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  *Efter överenskommelse per telefon<br />
                  Akuttandvård erbjuds samma dag.
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3">Betalning:</h3>
                  <p className="text-gray-700 text-sm">
                    Betalning sker efter varje behandlingstillfälle med kort eller Swish.
                    Vi har ingen fakturahantering.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Hitta till oss</h3>
              <p className="text-gray-700 mb-2">
                <strong>Adress:</strong> Växlarevägen 45, Solna
              </p>
              <p className="text-gray-700 mb-2">
                Vår klinik ligger centralt i Solna med närhet till Stockholm.
                Fri parkering finns tillgänglig för våra patienter.
              </p>
              <p className="text-sm text-gray-600">
                För detaljerade vägbeskrivningar, kontakta oss på telefon.
              </p>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white p-8 rounded-lg shadow-lg border text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Sidan kommer snart</h2>
            <p className="text-gray-600">Denna sektion är under utveckling. Kontakta oss direkt för mer information.</p>
            <div className="mt-6 space-y-2">
              <p><strong>Akuttandvård:</strong> 070 6- 47 95 00</p>
              <p><strong>Tidbokning:</strong> 08 - 68 43 91 00</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-blue-800">Solna Family Dental</h1>
              <p className="text-sm text-gray-600">Akut tandvård Stockholm</p>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>070 6- 47 95 00</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Växlarevägen 45, Solna</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-gray-200">
            <div className="flex flex-wrap gap-1 py-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Solna Family Dental</h3>
              <p className="text-blue-100">Modern tandvård i Solna med fokus på akutbehandling och patientvård.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2 text-blue-100">
                <p>Växlarevägen 45, Solna</p>
                <p>Akut: 070 6- 47 95 00</p>
                <p>Tidbokning: 08 - 68 43 91 00</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Öppettider</h3>
              <div className="text-blue-100">
                <p>Mån-Fre: 07:30-21:00*</p>
                <p>Lör-Sön: 07:30-21:00*</p>
                <p className="text-xs mt-2">*Efter överenskommelse</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-4 text-center text-blue-100">
            <p>&copy; 2024 Solna Family Dental AB. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
