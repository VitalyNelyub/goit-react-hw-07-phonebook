import { Blocks } from 'react-loader-spinner';


export default function loader() {
    return (
      <div>
        <Blocks
          visible={true}
          height="70"
          width="70"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      </div>
    );
}
