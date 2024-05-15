// Next JS
import Image from 'next/image';

// Components
import { Button } from '@/_components/atoms/Button';

// Icons
import IconCheck from '@/_assets/images/icons/icon-check.svg';
import IconClose from '@/_assets/images/icons/icon-modal-close.svg';

export const Modal = ({ modal }) => {
  return (
    <div className="modal-card">
      <a href={'/'} className="modal-close">
        <Image src={IconClose} alt="" />
      </a>
      <div className="modal-check">
        <Image src={IconCheck} alt="" />
      </div>
      <h4>Registration Successful</h4>
      <hr />
      <p>Thank you for registering! Your details have been successfully submitted</p>
      <a href={'/'}>
        <Button>Continue</Button>
      </a>
    </div>
  );
};
