import { createBoard } from '@wixc3/react-board';
import { PersonalForm } from '../../../components/personal-form/personal-form';

export default createBoard({
    name: 'PersonalForm',
    Board: () => <PersonalForm />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
