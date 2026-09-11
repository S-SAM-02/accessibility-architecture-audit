import http from 'node:http';
import {URL} from 'node:url';
const services=[
{id:'passport',name:'Passport Services',description:'Information and application services for Indian passports.',category:'Citizenship, visas & passports'},
{id:'health',name:'Health and Wellness Services',description:'Public health information and selected online health services.',category:'Health and wellness'},
{id:'tax',name:'Income Tax Services',description:'Access common income-tax information and online services.',category:'Money and taxes'},
{id:'education',name:'Education and Learning Services',description:'Government education resources, learning and examination services.',category:'Education and learning'}
];
const send=(res,status,data)=>{res.writeHead(status,{'content-type':'application/json; charset=utf-8','access-control-allow-origin':'*'});res.end(JSON.stringify(data));};
const server=http.createServer((req,res)=>{const url=new URL(req.url,'http://localhost'); if(req.method==='GET'&&url.pathname==='/health')return send(res,200,{status:'ok'}); if(req.method==='GET'&&url.pathname==='/api/services'){const q=(url.searchParams.get('query')||'').trim().toLowerCase();if(q.length>100)return send(res,400,{error:'Query is too long.'});const results=q?services.filter(s=>(s.name+' '+s.description+' '+s.category).toLowerCase().includes(q)):[];return send(res,200,{results});}send(res,404,{error:'Not found'});});
server.listen(3001,()=>console.log('API listening on http://localhost:3001'));
export {server};
