import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('Comments List', () => {

    let component; 

    beforeEach(() => {
        const props = { comments: ['New Comment', 'Other New Comment'] };
        component = renderComponent(CommentList, null, props);        
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    })

    it('show each comment taht iss provided', () => {
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Other New Comment');
    });

    
  
});

