import { renderComponent, expect } from '../test_helper';
import CommentsBox from '../../src/components/CommentsBox';

describe('Comments Box', () => {

    let component; 

    beforeEach(() => {
        component = renderComponent(CommentsBox);        
    });

    it('has the correct class', () => {
        expect(component).to.have.class('comment-box');
    }) 

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a text button', () => {
        expect(component.find('button')).to.exist;     
    });


    describe('entering some text', () => {

        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        })

        it('shows text that is the text area', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });
    
        it('when submitted, clears the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });

    
  
});

