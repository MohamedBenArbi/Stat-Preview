import './App.css';
import Component1 from './Component1'
import bg from "./bg1.jpg"

function App() {
  return (
    <>
      <div className='flex items-center justify-center w-screen h-screen bg-Cl-100'>

        <div className='flex w-4/6 bg-Cl-200 h-3/5 rounded-2xl min-h-[450px] flex-row fl'>

          <div className='flex flex-col items-start justify-around w-1/2 h-full p-10 text-white min-h-[450px] min-w-[450px]'>

            <div>

              <p className='text-4xl font-bold'>Get <span className=' text-Cl-300'>insights</span> that help <br /> your business grow.</p>

            </div>

            <div>

              <p>Discover the benefits of data analytics and make <br />
                better decision regarding revenue, customer experience,<br />
                and overall efficiency.</p>

            </div>

            <div>
              <div className='flex justify-around w-full '>

                <Component1 number="10k+" text="COMPANIES" />
                <Component1 number="314" text="TEMPLATES" />
                <Component1 number="12M+" text="QUERIES" />
              </div>
            </div>



          </div>


          <div className='w-1/2 h-full bg-Cl-300 rounded-r-2xl min-w-[400px]'>

            <img className='w-full h-full opacity-50 rounded-r-2xl' src={bg} />


          </div>

        </div>

      </div>
    </>
  );
}

export default App;
