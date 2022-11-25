import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  data:any=[

    {
      "image":"https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
      "name":"The Alchemist",
      "author":"Paulo Coelho",
      "description":"The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there"
    },
    {
      "image":"https://th.bing.com/th/id/OIP.7iv7NYDlvIWgpnWWUeahnAHaJ7?pid=ImgDet&rs=1",
      "name":"Alice in Wonderland",
      "author":"Lewis Caroll",
      "description":"Alice's Adventures in Wonderland (commonly Alice in Wonderland) is an 1865 English novel by Lewis Carroll. It details the story of a young girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures. It is seen as an example of the literary nonsense genre. The artist John Tenniel provided 42 wood-engraved illustrations for the book"
    },
    {
      "image":"https://th.bing.com/th/id/R.8a4ec1eb5af9588f9c426a2bb83ea986?rik=30m118ULoC60WA&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f9786050315288_p0_v2_s192x300.jpg&ehk=kuulBvBOogbp5vXZTrZ1P3eK5vyuMS4%2fMNN1Lbzn3lY%3d&risl=&pid=ImgRaw&r=0",
      "name":"The Time Machine",
      "author":"H G Wells",
      "description":"The Time Machine is a science fiction novella by H. G. Wells, published in 1895. The work is generally credited with the popularization of the concept of time travel by using a vehicle or device to travel purposely and selectively forward or backward through time. The term time machine, coined by Wells, is now almost universally used to refer to such a vehicle or device."
    },
    {
      "image":"https://th.bing.com/th/id/OIP.jGazUD02LhjMimtKaUnlaQHaML?pid=ImgDet&rs=1",
      "name":"The Divine Comedy",
      "author":"Dante Alighieri",
      "description":"The Divine Comedy is an Italian narrative poem by Dante Alighieri, begun c. 1308 and completed in 1320, a year before his death in 1321. It is widely considered the pre-eminent work in Italian literature. The poem's imaginative vision of the afterlife is representative of the medieval worldview as it existed in the Western Church by the 14th century"
    },
    {
      "image":"https://th.bing.com/th/id/R.d1d87d7eaecfa18ac850966fff357961?rik=kmv9Dy13ao2UPQ&riu=http%3a%2f%2fbuzz.iloveindia.com%2fwp-content%2fuploads%2f2015%2f08%2findian-books-25.jpg&ehk=QOxkJjYWmziz%2fug1QgYJYX6XM%2bV97Wzb0ME4IG7vWy4%3d&risl=&pid=ImgRaw&r=0",
      "name":"The Great Indian Novel",
      "author":"Shashi Tharoor",
      "description":"The Great Indian Novel is a satirical novel by Shashi Tharoor, first published by Viking Press in 1989. It is a fictional work that takes the story of the Mahabharata, the Indian epic, and recasts and resets it in the context of the Indian Independence Movement and the first three decades post-independence. Some critics have identified an element of subversion in the novel."
    },
    {
      "image":"https://n3.sdlcdn.com/imgs/e/v/9/One-Indian-Girl-SDL385412348-1-ca6fa.jpg",
      "name":"The One Indian Girl",
      "author":"Chetan Bhagat",
      "description":"The book begins with Radhika making arrangements regarding her marriage with Brijesh Gulati who works as a software engineer for Facebook in San Francisco.Radhika has an elder sister, Aditi who was the more beautiful, outgoing, and popular one at their school. She also communicated her thoughts and decisions to her inner judgemental voice"
    },
    {
      "image":"https://th.bing.com/th/id/R.7163fb68ff00ca858a722cdcfb38ec60?rik=ndykHoFF9YrxSw&riu=http%3a%2f%2f4.bp.blogspot.com%2f_OwUyZINTH3s%2fTF0FnBG8B2I%2fAAAAAAAAA-Y%2fuRRRmaucig0%2fs1600%2fmy_story.jpg&ehk=GpI11vD%2fDb7zwv95bc0dmV0Z9Iu43rHMOSzKBnn6VM0%3d&risl=&pid=ImgRaw&r=0",
      "name":"My Story",
      "author":"Kamala Das",
      "description":"My Story is an autobiographical book written by Indian author and poet Kamala Das (also known as Kamala Surayya or Madhavikutty). The book was originally published in Malayalam, titled Ente Katha. The book evoked violent reactions of admiration and criticism among the readers and critics. It remains to date the best-selling woman's autobiography in India."
    },
    {
      "image":"https://th.bing.com/th/id/OIP.s8raPnytrDflC9Js0FQqdwAAAA?pid=ImgDet&rs=1",
      "name":"A Brief History Of India",
      "author":"Alain Danielou",
      "description":"Daniélou's powerful rebuttal to the conventional view of India's history, which calls for a massive reevaluation of the history of humanity.Explores historical occurrences from each major time period starting with the first appearance of man 30,000 years ago. Couples the clarity and perspective of an outsider with the unique and specific knowledge of an insider"
    },
    {
      "image":"https://th.bing.com/th/id/OIP.QO53BUEF41C0Ppr2N1EIGAAAAA?pid=ImgDet&rs=1",
      "name":"Aadujeevitham",
      "author":"Benyamin",
      "description":"Aadujeevitham is a 2008 Malayalam novel about an abused migrant worker in Saudi Arabia written by Indian author Benyamin.The novel depicts the life of Najeeb Muhammed, an Indian emigrant going missing in Saudi Arabia and the trouble he faces there and how he ecapes from there."
    },
    {
      "image":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1462709894i/2623267._UY475_SS475_.jpg",
      "name":"Khasakinte Ithihasam",
      "author":"O V Vijayan",
      "description":"Khasakkinte Itihasam is the Malayalam debut novel by Indian writer O. V. Vijayan. It was first serialised in 1968 and published as a single edition in 1969.The novel tells the story of a young university student, who leaves a promising future to take up a primary school teacher’s job in the remote village of Khasak."
    }

  ]

}
