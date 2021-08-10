import { UniqueIdService } from "./unique-id.service";


describe(UniqueIdService.name, () => {
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
        const service = new UniqueIdService();
        const id = service.generateUniqueIdWithPrefix('app');

        expect(id.startsWith('app-')).toBeTrue(); 
        // Esse código é muito amplo. Com ele, se a resposta tiver "app-" em qualquer lugar da resposta, o teste fica verdadeiro
        // expect(id).toContain('app-'); 
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
        const service = new UniqueIdService();
        const ids = new Set();
        for (let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdWithPrefix('app'));
        }
        expect(ids.size).toBe(50);
    });
});

// describe('o artefato que queremos testar', () => {
//     it('Primeira condição que queremos testar', () => {

//     });

//     it('Segunda condição que queremos testar', () => {
        
//     });
// })