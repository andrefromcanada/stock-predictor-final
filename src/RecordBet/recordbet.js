import './recordbet.css';

function RecordBet() {
  const subject = 'RecordBet';
  const title = 'My Bet';
  const message = 'I think this stock will perform well on the next earnings report because...';
  const emailLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${title}%0D%0A%0D%0A${message}`)}`;

  return (
    <div className='recordbet-container'>
          <br/>
          <br/>

      <h1>Record Bet</h1>
      <p>
        The best way to stick to a habit is to hold yourself accountable for it. 
        Do yourself a favor and click the button below that takes you to a window to email your friends. 
        Tell them your findings and which stock you think will do well on the next earnings report and why.
      </p>
      <br/>

      <a className ='recordbet-button'href={emailLink}><button>Email a friend</button></a>
    </div>
  );
}

export default RecordBet;

