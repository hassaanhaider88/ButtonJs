var ButtonData = [
  {
    _id: "234dfg2345edcv",
    buttonCategory: "Glass", // Category like "Glass", "Neumorphism", "Gradient", "3D
    DeploymentStage: "Live", //either live or Pending
    ReactTailwindCode: `
                <button className="w-[150px] h-[50px] flex items-center justify-center outline-none cursor-pointer rounded-full border border-[#8F9092] text-[#606060] font-semibold text-sm font-sans shadow-[inset_0_0_0_0_#CECFD1] bg-gradient-to-t from-[#D8D9DB] via-[#ffffffcc] to-[#FDFDFD] hover:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_#CECFD1] active:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa] focus:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa]">
          Button
        </button>
                `,
    NumberOfViews: "720",
    NumbersOfCopyCode: "230",
    createdOn: "2025-07-26T11:12:15.496+00:00",
    isPremium: false,
  },
  {
    _id: "btn001glassstyle123456789",
    buttonCategory: "Glass",
    DeploymentStage: "Live",
    ReactTailwindCode: `
      <button className="px-6 py-2 rounded-lg bg-white/10 border border-white/30 backdrop-blur-lg text-white font-medium shadow-md hover:shadow-xl transition-all duration-300">
        Glass Button
      </button>
    `,
    NumberOfViews: "850",
    NumbersOfCopyCode: "340",
    createdOn: "2025-07-28T09:10:00.000+00:00",
    isPremium: false,
  },

  {
    _id: "btn002gradientx5678912abc",
    buttonCategory: "Gradient",
    DeploymentStage: "Live",
    ReactTailwindCode: `
      <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#48CAE4] to-[#0077B6] text-white font-semibold hover:opacity-90 transition-all">
        Gradient Button
      </button>
    `,
    NumberOfViews: "1050",
    NumbersOfCopyCode: "540",
    createdOn: "2025-07-28T10:30:00.000+00:00",
    isPremium: false,
  },

  {
    _id: "btn003neumorphism90d0d0f",
    buttonCategory: "Neumorphism",
    DeploymentStage: "Pending",
    ReactTailwindCode: `
      <button className="px-6 py-2 rounded-xl bg-[#e0e0e0] text-gray-800 shadow-[8px_8px_15px_#bebebe,-8px_-8px_15px_#ffffff] hover:shadow-inner transition-all">
        Neumorphic Button
      </button>
    `,
    NumberOfViews: "640",
    NumbersOfCopyCode: "260",
    createdOn: "2025-07-27T18:40:00.000+00:00",
    isPremium: false,
  },

  {
    _id: "btn0043dstyle2025xyz321",
    buttonCategory: "3D",
    DeploymentStage: "Pending",
    ReactTailwindCode: `
      <button className="px-6 py-2 rounded-lg bg-[#48CAE4] text-white font-bold shadow-[0_4px_0_#0077B6] active:shadow-[0_2px_0_#0077B6] transform active:translate-y-1 transition-all">
        3D Button
      </button>
    `,
    NumberOfViews: "490",
    NumbersOfCopyCode: "180",
    createdOn: "2025-07-25T12:00:00.000+00:00",
    isPremium: false,
  },

  {
    _id: "btn005outlinebtnpqr09876",
    buttonCategory: "Outline",
    DeploymentStage: "Pending",
    ReactTailwindCode: `
      <button className="px-6 py-2 border-2 border-[#48CAE4] text-[#48CAE4] rounded-full hover:bg-[#48CAE4] hover:text-white transition-colors duration-300">
        Outline Button
      </button>
    `,
    NumberOfViews: "720",
    NumbersOfCopyCode: "310",
    createdOn: "2025-07-28T14:20:00.000+00:00",
    isPremium: false,
  },

  {
    _id: "btn006outlinebtnpqr09876",
    buttonCategory: "Outline",
    DeploymentStage: "Live",
    ReactTailwindCode: `<button
  className="relative text-[#f0f0f0] text-[16px] px-[20px] py-[15px] border-none bg-transparent z-[1] overflow-hidden"
  onMouseEnter={(e) => {
    e.currentTarget.querySelector('.before').style.transform = 'translate(5%, 20%)';
    e.currentTarget.querySelector('.before').style.width = '110%';
    e.currentTarget.querySelector('.before').style.height = '110%';
    e.currentTarget.querySelector('.after').style.transform = 'translate(0, 0)';
    e.currentTarget.querySelector('.after').style.width = '100%';
    e.currentTarget.querySelector('.after').style.height = '100%';
    e.currentTarget.querySelector('.after').style.borderRadius = '10px';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.querySelector('.before').style.transform = 'translate(0%, 0%)';
    e.currentTarget.querySelector('.before').style.width = '100%';
    e.currentTarget.querySelector('.before').style.height = '100%';
    e.currentTarget.querySelector('.after').style.transform = 'translate(10px, 10px)';
    e.currentTarget.querySelector('.after').style.width = '35px';
    e.currentTarget.querySelector('.after').style.height = '35px';
    e.currentTarget.querySelector('.after').style.borderRadius = '50px';
  }}
  onMouseDown={(e) => {
    e.currentTarget.querySelector('.after').style.transition = '0s';
    e.currentTarget.querySelector('.after').style.transform = 'translate(0, 5%)';
  }}
  onMouseUp={(e) => {
    e.currentTarget.querySelector('.after').style.transition = 'all 0.4s';
  }}
>
  Hey, Hover Me
  <span
    className="before absolute bottom-0 right-0 -z-10 transition-all duration-400"
    style={{
      transform: 'translate(0%, 0%)',
      width: '100%',
      height: '100%',
      background: '#28282d',
      borderRadius: '10px',
    }}
  />
  <span
    className="after absolute bottom-0 right-0 -z-10 transition-all duration-400"
    style={{
      transform: 'translate(10px, 10px)',
      width: '35px',
      height: '35px',
      background: '#ffffff15',
      backdropFilter: 'blur(5px)',
      borderRadius: '50px',
    }}
  />
</button>

    `,
    NumberOfViews: "720",
    NumbersOfCopyCode: "310",
    createdOn: "2025-07-28T14:20:00.000+00:00",
    isPremium: false,
  },

  {
    _id: "btn007outlinebtnpqr09876",
    buttonCategory: "Outline",
    DeploymentStage: "Live",
    ReactTailwindCode: `<button
  className="relative cursor-pointer text-[13px] rounded-[16px] border-0 p-[2px] bg-[radial-gradient(circle_80px_at_80%_-10%,_#ffffff,_#181b1b)]"
  style={{
    position: 'relative',
  }}
>
  <div
    style={{
      content: '""',
      position: 'absolute',
      width: '65%',
      height: '60%',
      borderRadius: '120px',
      top: 0,
      right: 0,
      boxShadow: '0 0 20px #ffffff38',
      zIndex: -1,
    }}
  />
  <div
    style={{
      position: 'absolute',
      width: '70px',
      height: '100%',
      borderRadius: '16px',
      bottom: 0,
      left: 0,
      background: 'radial-gradient(circle 60px at 0% 100%, #3fe9ff, #0000ff80, transparent)',
      boxShadow: '-10px 10px 30px #0051ff2d',
    }}
  />
  <div
    className="relative px-[25px] py-[14px] rounded-[14px] text-white z-[3] bg-[radial-gradient(circle_80px_at_80%_-50%,_#777777,_#0f1111)]"
  >
    <span
      style={{
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        borderRadius: '14px',
        background: 'radial-gradient(circle 60px at 0% 100%, #00e1ff1a, #0000ff11, transparent)',
        zIndex: 0,
      }}
    />
    HMK CodeWeb
  </div>
</button>

    `,
    NumberOfViews: "720",
    NumbersOfCopyCode: "310",
    createdOn: "2025-07-28T14:20:00.000+00:00",
    isPremium: false,
  },
  {
    _id: "btn009outlinebtnpqr09876",
    DeploymentStage: "Live",
    buttonCategory: "Outline",
    ReactTailwindCode: `<div className="relative bg-white text-black px-[15px] py-[15px] m-[10px] rounded-[10px] w-[150px] h-[50px] text-[17px] flex flex-col justify-center items-center shadow-md cursor-pointer transition-all duration-300 group">
      
      {/* Tooltip */}
      <span className="absolute top-0 opacity-0 group-hover:top-[-45px] group-hover:opacity-100 pointer-events-none transition-all duration-300 text-[14px] px-[8px] py-[5px] rounded-[5px] shadow-md bg-white text-white group-hover:bg-gradient-to-br from-blue-900 to-blue-600 z-10">
        ButtonJS
        {/* Tooltip arrow (simulated ::before) */}
        <span className="absolute w-[8px] h-[8px] bg-white group-hover:bg-gradient-to-br from-blue-900 to-blue-600 bottom-[-3px] left-1/2 -translate-x-1/2 rotate-45 transition-all duration-300"></span>
      </span>

      {/* Main Button Text */}
      <span className="transition-all duration-300 px-2 py-1 rounded-md">
        Tooltip
      </span>
    </div>

    `,
    NumberOfViews: "720",
    NumbersOfCopyCode: "310",
    createdOn: "2025-07-28T14:20:00.000+00:00",
    isPremium: false,
  },
  {
    _id: "234dfg2345edcv",
    buttonCategory: "Glass", // Category like "Glass", "Neumorphism", "Gradient", "3D
    DeploymentStage: "Live",
    ReactTailwindCode: `
                <button className="w-[150px] h-[50px] flex items-center justify-center outline-none cursor-pointer rounded-full border border-[#8F9092] text-[#606060] font-semibold text-sm font-sans shadow-[inset_0_0_0_0_#CECFD1] bg-gradient-to-t from-[#D8D9DB] via-[#ffffffcc] to-[#FDFDFD] hover:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_#CECFD1] active:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa] focus:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa]">
          Button
        </button>
                `,
    NumberOfViews: "720",
    NumbersOfCopyCode: "230",
    createdOn: "2025-07-26T11:12:15.496+00:00",
    isPremium: false,
  },
  {
    _id: "btn001glassstyle123456789",
    buttonCategory: "Glass",
    DeploymentStage: "Pending",
    ReactTailwindCode: `
      <button className="px-6 py-2 rounded-lg bg-white/10 border border-white/30 backdrop-blur-lg text-white font-medium shadow-md hover:shadow-xl transition-all duration-300">
        Glass Button
      </button>
    `,
    NumberOfViews: "850",
    NumbersOfCopyCode: "340",
    createdOn: "2025-07-28T09:10:00.000+00:00",
    isPremium: false,
  },

  {
    _id: "btn002gradientx5678912abc",
    buttonCategory: "Gradient",
    ReactTailwindCode: `
      <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#48CAE4] to-[#0077B6] text-white font-semibold hover:opacity-90 transition-all">
        Gradient Button
      </button>
    `,
    NumberOfViews: "1050",
    NumbersOfCopyCode: "540",
    createdOn: "2025-07-28T10:30:00.000+00:00",
    isPremium: false,
  },

  {
    _id: "btn003neumorphism90d0d0f",
    buttonCategory: "Neumorphism",
    DeploymentStage: "Pending",
    ReactTailwindCode: `
      <button className="px-6 py-2 rounded-xl bg-[#e0e0e0] text-gray-800 shadow-[8px_8px_15px_#bebebe,-8px_-8px_15px_#ffffff] hover:shadow-inner transition-all">
        Neumorphic Button
      </button>
    `,
    NumberOfViews: "640",
    NumbersOfCopyCode: "260",
    createdOn: "2025-07-27T18:40:00.000+00:00",
    isPremium: false,
  },

  {
    _id: "btn0043dstyle2025xyz321",
    buttonCategory: "3D",
    DeploymentStage: "Pending",

    ReactTailwindCode: `
      <button className="px-6 py-2 rounded-lg bg-[#48CAE4] text-white font-bold shadow-[0_4px_0_#0077B6] active:shadow-[0_2px_0_#0077B6] transform active:translate-y-1 transition-all">
        3D Button
      </button>
    `,
    NumberOfViews: "490",
    NumbersOfCopyCode: "180",
    createdOn: "2025-07-25T12:00:00.000+00:00",
    isPremium: false,
  },

  {
    _id: "btn005outlinebtnpqr09876",
    buttonCategory: "Outline",
    DeploymentStage: "Pending",

    ReactTailwindCode: `
      <button className="px-6 py-2 border-2 border-[#48CAE4] text-[#48CAE4] rounded-full hover:bg-[#48CAE4] hover:text-white transition-colors duration-300">
        Outline Button
      </button>
    `,
    NumberOfViews: "720",
    NumbersOfCopyCode: "310",
    createdOn: "2025-07-28T14:20:00.000+00:00",
    isPremium: false,
  },

  {
    _id: "btn006outlinebtnpqr09876",
    buttonCategory: "Outline",
    DeploymentStage: "Live",
    ReactTailwindCode: `<button
  className="relative text-[#f0f0f0] text-[16px] px-[20px] py-[15px] border-none bg-transparent z-[1] overflow-hidden"
  onMouseEnter={(e) => {
    e.currentTarget.querySelector('.before').style.transform = 'translate(5%, 20%)';
    e.currentTarget.querySelector('.before').style.width = '110%';
    e.currentTarget.querySelector('.before').style.height = '110%';
    e.currentTarget.querySelector('.after').style.transform = 'translate(0, 0)';
    e.currentTarget.querySelector('.after').style.width = '100%';
    e.currentTarget.querySelector('.after').style.height = '100%';
    e.currentTarget.querySelector('.after').style.borderRadius = '10px';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.querySelector('.before').style.transform = 'translate(0%, 0%)';
    e.currentTarget.querySelector('.before').style.width = '100%';
    e.currentTarget.querySelector('.before').style.height = '100%';
    e.currentTarget.querySelector('.after').style.transform = 'translate(10px, 10px)';
    e.currentTarget.querySelector('.after').style.width = '35px';
    e.currentTarget.querySelector('.after').style.height = '35px';
    e.currentTarget.querySelector('.after').style.borderRadius = '50px';
  }}
  onMouseDown={(e) => {
    e.currentTarget.querySelector('.after').style.transition = '0s';
    e.currentTarget.querySelector('.after').style.transform = 'translate(0, 5%)';
  }}
  onMouseUp={(e) => {
    e.currentTarget.querySelector('.after').style.transition = 'all 0.4s';
  }}
>
  Hey, Hover Me
  <span
    className="before absolute bottom-0 right-0 -z-10 transition-all duration-400"
    style={{
      transform: 'translate(0%, 0%)',
      width: '100%',
      height: '100%',
      background: '#28282d',
      borderRadius: '10px',
    }}
  />
  <span
    className="after absolute bottom-0 right-0 -z-10 transition-all duration-400"
    style={{
      transform: 'translate(10px, 10px)',
      width: '35px',
      height: '35px',
      background: '#ffffff15',
      backdropFilter: 'blur(5px)',
      borderRadius: '50px',
    }}
  />
</button>

    `,
    NumberOfViews: "720",
    NumbersOfCopyCode: "310",
    createdOn: "2025-07-28T14:20:00.000+00:00",
    isPremium: false,
  },

  {
    _id: "btn007outlinebtnpqr09876",
    buttonCategory: "Outline",
    DeploymentStage: "Live",
    ReactTailwindCode: `<button
  className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
>
  <div className="relative overflow-hidden">
    <p
      className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
    >
      Button
    </p>
    <p
      className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
    >
      Button
    </p>
  </div>
</button>


    `,
    NumberOfViews: "720",
    NumbersOfCopyCode: "310",
    createdOn: "2025-07-28T14:20:00.000+00:00",
    isPremium: false,
  },
  {
    _id: "btn009outlinebtnpqr0987688",
    buttonCategory: "Outline",
    DeploymentStage: "Live",
    ReactTailwindCode: `<div className="group relative">
  <button>
    <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  </button>
  <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border text-black 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100">GitHub<span>
    </span></span></div>
    `,
    NumberOfViews: "720",
    NumbersOfCopyCode: "310",
    createdOn: "2025-07-28T14:20:00.000+00:00",
    isPremium: false,
  },
];

export default ButtonData;
