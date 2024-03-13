import { createBoard } from '@wixc3/react-board';
import { PFAddress } from '../../../components/pf-address/pf-address';

export default createBoard({
    name: 'PFAddress',
    Board: () => <PFAddress />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
