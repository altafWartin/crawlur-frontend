import PropTypes from "prop-types";

const ProfileCard = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-lg bg-blue flex flex-row items-start justify-between pt-[1.5rem] pb-[1.312rem] pr-[1.25rem] pl-[5.125rem] box-border max-w-full gap-[1.25rem] z-[2] text-left text-[1.25rem] text-white-color font-h5-22-bold ${className}`}
    >
      <div className="h-[4.313rem] w-[82.5rem] relative rounded-lg bg-blue hidden max-w-full" />
      <div className="relative leading-[1.5rem] font-extrabold inline-block min-w-[7.438rem] z-[3]">
        Profile name
      </div>
      <div className="flex flex-row items-start justify-start gap-[8.375rem] max-w-full text-center">
        <div className="relative leading-[1.5rem] font-extrabold z-[3]">
          Manufacturer
        </div>
        <div className="relative leading-[1.5rem] font-extrabold text-left inline-block min-w-[7.063rem] z-[3]">
          Available at
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  className: PropTypes.string,
};

export default ProfileCard;
