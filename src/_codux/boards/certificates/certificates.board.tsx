import { createBoard } from '@wixc3/react-board';
import { Certificates } from '../../../components/certificates/certificates';

export default createBoard({
    name: 'Certificates',
    Board: () => <Certificates />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
