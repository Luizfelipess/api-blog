import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main =async () => {
    await prisma.user.deleteMany({});
    await prisma.post.deleteMany({});

    const user = await prisma.user.create({
        data: {
            email: 'luiz@mail.com',
            name : 'Luiz Silva',
            age: 27
        }
    });

    const post = await prisma.post.create({
        data: {
            title: 'Post criado via seed',
            body: 'Post de Teste',
            authorId: user.id     
        }
    });
}

main();