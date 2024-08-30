import Book from './Book';
import './BookList.css';
const kremli = 'https://i0.wp.com/www.sulakauri.ge/wp-content/uploads/2024/07/kupidoni-kremlis-kedelthan.webp?fit=600%2C800&ssl=1';
const norvegia = 'https://i0.wp.com/www.sulakauri.ge/wp-content/uploads/2024/07/norvegiuli-tqhe.webp?fit=600%2C800&ssl=1';
const obole = 'https://i0.wp.com/www.sulakauri.ge/wp-content/uploads/2024/07/obole.webp?fit=600%2C800&ssl=1';
const rozina = 'https://i0.wp.com/www.sulakauri.ge/wp-content/uploads/2024/07/rodzina.webp?fit=600%2C800&ssl=1';


const BookList = () => {
  const books = [
    {
      image: kremli,
      title: 'კრემლი',
      description: '„…რაიც მერე ვაგონში დატრიალდა, იმას საბჭოთა კინოში კომედიათ ვერავინ გადეიღებდა…~',
      characters: ['პერსონაჟი 1', 'პერსონაჟი 2', 'პერსონაჟი 3'],
      id:1,
    },
    {
      image: norvegia,
      title: 'ნორვეგიული ტყე',
      description: 'ტოკიო, XX საუკუნის 60-იანი წლების მიწურული, დრო, როდესაც იაპონელი სტუდენტები, მსოფლიოს სხვა უნივერსიტეტების  სტუდენტების მსგავსად,  ამბოხებებს აწყობენ არსებული წესრიგის წინააღმდეგ.',
      characters: ['პერსონაჟი A', 'პერსონაჟი B'],
      id:2,
    },
    {
      image: obole,
      title: 'ობოლი',
      description: 'რომანის მთავარი გმირი, ირაკლი, მურის ციხისთავების შთამომავალი, მაგრამ გათბილისელებული ბიჭი, ორი დღით ჩადის ერთ პატარა დაბაში ბაბუისეული სახლის ჩატეხილი სახურავის შესაკეთებლად და თავგადასავალიც იწყება.',
      characters: ['პერსონაჟი X', 'პერსონაჟი Y', 'პერსონაჟი Z'],
      id:3,
    },
    {
      image: rozina,
      title: 'როზინა',
      description: 'ეს ის დროა, როცა ზღვით ნაპირდასველებულ და კავკასიის ქედს საშრობად მიფენილ მშობლიურ მხარეს – სტალინმა ერთხელ რომ უწოდა „პატარა ტერიტორია რუსეთის სამხრეთში, რომელიც თავს საქართველოდ მოიხსენიებს“ – აღარ ჰქვია მისი სამშობლო.',
      characters: ['პერსონაჟი მ', 'პერსონაჟი ნ'],
      id:4,
    },
  ];

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="book-list">
      {books.map((book, id) => (
        <Book
          key={book.id}
          image={book.image}
          title={book.title}
          description={book.description}
          characters={book.characters}
          onButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
};

export default BookList;
