type ErrorItem = {
  id: string;
  label: string;
};

type ShowErrorsProps = {
  errors: ErrorItem[];
};

const ShowErrors: React.FC<ShowErrorsProps> = ({ errors }) => {
  return (
    <div className="flex flex-col gap-1 text-sm text-error">
      {errors?.map((error, index) => {
        return <p key={index}>{error.label}</p>;
      })}
    </div>
  );
};

export default ShowErrors;
