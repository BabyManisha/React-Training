// import logo from './logo.svg';
import './App.css';
import Fun from './1components/Fun';
import ClassComponent from './1components/ClassComponent';

import FunProps from './2props/FunProps'
import ClassComponentProps from './2props/ClassComponentProps'
import FunStates from './3states/FunStates';
import ClassComponentStates from './3states/ClassComponentStates';
import ClassCompLC from './4lifecycles/ClassCompLC';
import FunCompLC from './4lifecycles/FunCompLC';
import FunEvents from './5events/FunEvents';
import ClassEvents from './5events/ClassEvents';
import FunCond from './6conditionalrendering/FunCond';
import ClassCond from './6conditionalrendering/ClassCond';
import FunListKeys from './7lists&keys/FunListKeys';
import ClassListKeys from './7lists&keys/ClassListKeys';
import ReForms from './8forms/ReForms';
import HeightCal from './9liftup/HeightCal';
import Compo from './10composition/Compo';

const element = <h1 className="heading1">Hello, SM World!</h1>;

function App() {
  return (
    <div className="App">
      <main>

        {element}

        <section>
          <h2 style={{color: '#61dafb'}}>Components</h2>
          <ul>
            <li><Fun/></li>
            <li><ClassComponent/></li>
          </ul>
        </section>

        <section>
          <h2>Properties => Can't Mutate</h2>
          <ul>
            <li><FunProps name="funName" /></li>
            <li><ClassComponentProps name="classCompName" /></li>
          </ul>
        </section>

        <section>
          <h2>States => Can Mutate</h2>
          <ul>
            <li> <FunStates/> </li>
            <li> <ClassComponentStates/> </li>
          </ul>
        </section>

        <section>
          <h2>Life Cycle: Mount, Update, Unmount</h2>
          <div id="lc"><ClassCompLC/></div>
          <FunCompLC/>
          <br/>
          <strong>Open COnsole and check live logs</strong>
          <ul><b>Mount:</b>
            <li>constructor => Optional</li>
            <li>getDerivedStateFromProps => Optional</li>
            <li>render => Required</li>
            <li>componentDidMount => Optional</li>
          </ul>
          <ul><b>Update:</b>
            <li>getDerivedStateFromProps => Optional</li>
            <li>shouldComponentUpdate => Optional</li>
            <li>render => Required</li>
            <li>getSnapshotBeforeUpdate => Optional</li>
            <li>componentDidMount => Optional</li>
          </ul>
          <ul><b>UnMount:</b>
            <li>componentWillUnmount => Optional</li>
          </ul>
        </section>

        <section>
          <h2>Events</h2>
          <ul>
            <li> <FunEvents/> </li>
            <li> <ClassEvents/> </li>
          </ul>
        </section>

        <section>
          <h2>COnditional Rendering</h2>
          <ul>
            <li> <FunCond/> </li>
            <li> <ClassCond/> </li>
          </ul>
        </section>

        <section>
          <h2>List & Keys</h2>
          <strong>Better not use index unless your list is static / fixed or no need to sort etc.. Use id kind of fixed unique property rather Index</strong>
          <ul>
            <li> <FunListKeys/> </li>
            <li> <ClassListKeys/> </li>
          </ul>
        </section>

        <section>
          <h2>Forms</h2>
          <ReForms/>
        </section>

        <section>
          <h2>Lift Up</h2>
          <HeightCal name={'Height to CM Converter'}/>
        </section>

        <section>
          <h2>Composition</h2>
          <Compo header={'This is Head'} footer={'This is Footer'}>
            <strong>This is BODY</strong>
            <br/>
            <b>Hellooo</b>
          </Compo>
        </section>
        
      </main>
    </div>
  );
}

export default App;
