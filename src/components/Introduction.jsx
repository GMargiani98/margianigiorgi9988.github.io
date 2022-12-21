const Introduction = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
        Giorgi Margiani
      </h1>
      <p className='text-base md:text-xl mb-3 font-medium'>
        Full Stack Engineer
      </p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
        I'm a full-stack JavaScript developer, focusing on React/Node. Passion
        for writing a performant code and exploring new technologies. Very much
        Into AR.
        <br />
        Visit my Linkedin{' '}
        <a
          href='https://www.linkedin.com/in/giorgi-margiani-179415217/'
          target='_blank'
          className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
          rel='noreferrer noopener'
        >
          Giorgi Margiani
        </a>{' '}
        for more info.
      </p>
    </div>
  );
};

export default Introduction;
