import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles';
import Footer from '../../components/footer/footer.component';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <div className='_bb'>
        <SignInForm  />
      </div>
      <div className='_bc'>
        <SignUpForm  />
      </div>
      <Footer />

    </AuthenticationContainer>
  );
};

export default Authentication;
