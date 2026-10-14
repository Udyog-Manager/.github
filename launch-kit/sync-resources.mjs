import fs from 'node:fs';
import path from 'node:path';
const root=path.dirname(new URL(import.meta.url).pathname);
const dir=path.join(root,'dist/resources');fs.mkdirSync(dir,{recursive:true});
for(const name of ['Udyog-Manager-Complete-Report.pdf','Udyog-Manager-Complete-Presentation.pdf'])fs.copyFileSync(path.resolve(root,'../output/pdf',name),path.join(dir,name));
fs.copyFileSync(path.resolve(root,'../Udyog-Manager-Product-and-Development-Specification.md'),path.join(dir,'Udyog-Manager-Product-and-Development-Specification.md'));
for(const [source,name] of [[path.resolve(root,'../output/pdf/Udyog-Manager-Complete-Presentation.html'),'presentation.html'],[path.join(root,'Udyog-Manager-Idea.html'),'idea.html']]){
 let html=fs.readFileSync(source,'utf8').replace('href="../Udyog-Manager-Product-and-Development-Specification.md"','href="Udyog-Manager-Product-and-Development-Specification.md"');
 html=html.replace('</style>','.resource-home{display:block;padding:12px 24px;font-size:14px;background:#e7ecd9;color:#123e33;text-underline-offset:4px}.slide{min-height:calc(100vh - 130px)}@media print{.resource-home{display:none}} </style>');
 html=html.replace('<body>','<body><a class="resource-home" href="../index.html#resources">← Udyog Manager resources</a>');
 fs.writeFileSync(path.join(dir,name),html);
}
fs.writeFileSync(path.join(dir,'Brand-Guide.md'),fs.readFileSync(path.join(root,'Brand-Guide.md'),'utf8').replaceAll('dist/assets/','../assets/'));
let checked=0;for(const file of ['dist/index.html','dist/resources/idea.html','dist/resources/presentation.html']){
const html=fs.readFileSync(path.join(root,file),'utf8');for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){const url=match[1];if(url.startsWith('#')||/^[a-z]+:/i.test(url))continue;const dest=path.resolve(root,path.dirname(file),decodeURIComponent(url.split('#')[0]));if(!fs.existsSync(dest))throw new Error('Missing linked resource: '+dest);checked++;}}
console.log(`Resources synchronized; ${checked} local links validated.`);
