import React from 'react';
import { Image, Jumbotron, Container } from 'react-bootstrap';

class Main extends React.Component {
  state = {

  }
  render() {
    return (
      <div>
      <Jumbotron fluid>
      <Container>
        <h1>Welcome to our awesome app! It will tell you about all marvell heroes in Marvel Universe</h1>
        <p>
        The Marvel Universe is strongly based on the real world. Earth in the Marvel Universe has all the features of the real one: same countries, same personalities (politicians, movie stars, etc.), same historical events (such as World War II), and so on; however, it also contains many other fictional elements: countries such as Wakanda and Latveria (very small nations) and organizations like the espionage agency S.H.I.E.L.D. and its enemies, HYDRA and A.I.M. In 2009 Marvel officially described its world's geography in a two-part miniseries, the Marvel Atlas.
        </p>
        <Image src="https://i.etsystatic.com/13702629/r/il/067798/1979047720/il_1588xN.1979047720_kthx.jpg" fluid/>
        <p>
        Most importantly, the Marvel Universe also incorporates examples of almost all major science fiction and fantasy concepts, with writers adding more continuously. Aliens, gods, magic, cosmic powers and extremely advanced human-developed technology all exist prominently in the Marvel Universe. (A universe incorporating all these types of fantastic elements is fairly rare; another example is the DC Universe.) Monsters also play a more prominent role with east Asian origins of magical incantation, outlandish sorcery and manifesting principle in the Marvel Universe. One such case is Fin Fang Foom arising from the ashes of tantric magic. Thanks to these extra elements, Earth in the Marvel Universe is home to a large number of superheroes and supervillains, who have gained their powers by any of these means.
        </p>
      </Container>
    </Jumbotron>
        
      </div>
    )
  }
}

export default Main;