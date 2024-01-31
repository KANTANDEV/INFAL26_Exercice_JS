const { Animal, verifierBudget } = require("./exercice");

describe("Exercice Zoo", () => {
    // Test de la classe Animal
    describe("Classe Animal", () => {
        test("doit correctement initialiser une instance d'Animal (Simba)", () => {
            const simba = new Animal("Simba", "Lion", "critique");
            expect(simba.nom).toBe("Simba");
            expect(simba.espece).toBe("Lion");
            expect(simba.sante).toBe("critique");
        });

        test("doit correctement initialiser une instance d'Animal (Nemo)", () => {
            const nemo = new Animal("Nemo", "Poisson-clown", "bon");
            expect(nemo.nom).toBe("Nemo");
            expect(nemo.espece).toBe("Poisson-clown");
            expect(nemo.sante).toBe("bon");
        });

        test("la méthode nourrir doit améliorer l'état de santé de l'animal (Simba)", () => {
            const simba = new Animal("Simba", "Lion", "critique");
            simba.nourrir();
            expect(simba.sante).toBe("moyen");
            simba.nourrir();
            expect(simba.sante).toBe("bon");
        });

        test("la méthode nourrir doit maintenir l'état de santé si l'animal est déjà en bonne santé (Nemo)", () => {
            const nemo = new Animal("Nemo", "Poisson-clown", "bon");
            nemo.nourrir();
            expect(nemo.sante).toBe("bon");
        });
    });

    // Test de la fonction verifierBudget
    describe("Fonction verifierBudget", () => {
        let consoleSpy;

        beforeEach(() => {
            consoleSpy = jest.spyOn(console, "log").mockImplementation();
        });

        afterEach(() => {
            consoleSpy.mockRestore();
        });

        test("doit afficher un avertissement si le budget est inférieur à 20000", () => {
            verifierBudget(15000);
            expect(console.log).toHaveBeenCalledWith(
                "Attention : Le budget est très bas !"
            );
        });
    });

    // Test de la boucle sur les animaux
    describe("Boucle sur les animaux", () => {
        let consoleSpy;

        beforeEach(() => {
            consoleSpy = jest.spyOn(console, "log").mockImplementation();
        });

        afterEach(() => {
            consoleSpy.mockRestore();
        });

        test("doit parcourir tous les animaux et afficher leur statut", () => {
            const animaux = [
                new Animal("Simba", "Lion", "critique"),
                new Animal("Nemo", "Poisson-clown", "bon"),
            ];
            animaux.forEach((animal) => {
                console.log(
                    `L'animal ${animal.nom} (${animal.espece}) est en état de santé : ${animal.sante}`
                );
            });
            expect(console.log).toHaveBeenCalledWith(
                "L'animal Simba (Lion) est en état de santé : critique"
            );
            expect(console.log).toHaveBeenCalledWith(
                "L'animal Nemo (Poisson-clown) est en état de santé : bon"
            );
        });
    });
});
