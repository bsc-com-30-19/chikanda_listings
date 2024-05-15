

const FormInput = (props) => {
  return (
    <div>
        <div className=" after:content-[''] after:table after:clear-both mt-[15px] text-p_lave">
            <label htmlFor="email" className="w-[35%] float-left">{props.text}</label>
            <input className="w-[65%] float-left rounded-[15px] border-none outline-none text-p_purp_d" type="text" name="email" placeholder={props.ptext}/>
        </div>
    </div>
  );
};

export default FormInput;
