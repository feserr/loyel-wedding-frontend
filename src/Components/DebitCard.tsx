import "../Styles/bank.css"

interface DebitCardProps {
  bank: string;
  accountNumber: string;
  name: string;
}

const DebitCard = ({ bank, accountNumber, name }: DebitCardProps) => {
  return (
    <div
      className=" flex-shrink-0 rounded-[20px] bg-[#f2d4e7] shadow-lg shadow-[#cbdded] w-full md:w-[430px] h-52 md:h-64 bank-p-6"
      style={{
        backgroundImage: "linear-gradient(62deg, #8eab8e 0%, #a4bfa4 45%)",
      }}
    >
      <div className="flex flex-col justify-end h-full text-gray-800">
        <div className="normal-text mb-0.5 font-medium white">{bank}</div>
        {accountNumber.length ? (
          <div className="mb-4 relative flex items-center">
            <div className="text-xl md:text-2xl font-bold mr-2 normal-text white">
              {accountNumber}
            </div>
          </div>
        ) : (
          <div className="mb-4 relative flex items-center">
            <div className="normal-text text-lg md:text-xl font-semibold white">
              {"Error, contacta con los novios"}
            </div>
          </div>
        )}
        {
          accountNumber.length ?
            (<div><div className="normal-text mb-0.5 font-medium white">Titular</div>
              <div className="normal-text text-lg md:text-xl font-semibold white">{name}</div></div>) :
            (<div></div>)
        }
      </div>
    </div >
  );
};

export default DebitCard;