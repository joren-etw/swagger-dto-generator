# swagger-dto-generator

Generate TypeScript DTO types from Swagger/OpenAPI schemas.  
Works with **NestJS**, **Express**, or any Node.js project.

## Installation

```bash
npm install swagger-dto-generator
```

## Usage

### In NestJS

```typescript
import { generateFrontendApiTypes } from 'swagger-dto-generator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('API').setVersion('1.0').build();

  const document = SwaggerModule.createDocument(app, config);
  generateFrontendApiTypes(document, { outFile: './src/types/api-types.d.ts' });

  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
```

### In Express
```typescript
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import { generateFrontendApiTypes } from 'swagger-dto-generator';

generateFrontendApiTypes(swaggerDocument, { outFile: './src/types/api-types.d.ts' });
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

### CLI
```Bash
npx generate-api-types ./swagger.json ./src/types/api-types.d.ts
```

### License
MIT © Joren Lauryssen (joren-etw)