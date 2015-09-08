// JavaScript Document
$(document).ready(function(){
	//definir classe de upload
	$("#frm-upload-foto").fileupload({
			url:$("#frm-upload-foto").attr('action')
	});
	//upload de foto em crossdomain
	$("#frm-upload-foto").fileupload(
			'option',
			'redirect',
			window.location.href.replace(
					/\/[^\/]*$/,
					'/cors/result.html?%s'
			)
	);	
});
//LIMITADOR PARA TEXT AREA
function textCounter(field, countfield, maxlimit) {
	if(field.value.length > maxlimit)
	{
		field.value = field.value.substring(0, maxlimit);
	}else{
		countfield.value = maxlimit - field.value.length;
	}
}

//SOMENTE NUMEROS NOS CAMPOS
function somente_numeros(e){
    var nav4 = window.Event ? true : false;
    if(nav4) {
        var whichCode = e.which;
    } else {
        var whichCode = e.keyCode;
    }

    if (whichCode > 47 && whichCode < 58 || whichCode == 8 || whichCode ==9 || whichCode == 0) {
        return true;
    } else {    
        return false;
    }
}//testa assim <input type="text" name="text1" onkeypress="return somente_numeros(event);">

function SomenteNum(Campo)
{
	var checkOK = '0123456789';
	var checkStr = Campo.value;
	var allValid = true;
	var decPoints = 0;
	var allNum = "";
	for (i = 0;  i < checkStr.length;  i++)
	{
		ch = checkStr.charAt(i);
		for (j = 0;  j < checkOK.length;  j++)
			if (ch == checkOK.charAt(j))
			break;
		if (j == checkOK.length)
		{
			allValid = false;
			break;
		}
		if (ch != " ")
		allNum += ch;
	}
	
	if (!allValid)
	{
		alert("Somente n�meros!") 
		Campo.value=allNum
		Campo.focus();
		return false;
	}
	return true;
}



//VALIDADOR DE EMAIL
function validacaoEmailPT(emailad){
    var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    var check=/@[\w\-]+\./;
    var checkend=/\.[a-zA-Z]{2,3}$/;
    if(((emailad.search(exclude) != -1)||(emailad.search(check)) == -1)||(emailad.search(checkend) == -1)){
        //alert("� necess�rio e-mail. O presente E-mail est� no formato Inv�lido.");
		retorno = false;
    }else{
        retorno = true;
    }
	return retorno;
}

//VALIDA��O DE EMAIL TRUE FALSE
function validacaoEmailTrueFalse(emailad){
    var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    var check=/@[\w\-]+\./;
    var checkend=/\.[a-zA-Z]{2,3}$/;
    if(((emailad.search(exclude) != -1)||(emailad.search(check)) == -1)||(emailad.search(checkend) == -1)){
        //alert("� necess�rio e-mail. O presente E-mail est� no formato Inv�lido.");
		retorno = false;
    }else{
        retorno = true;
    }
	return retorno;
}

//VALIDAR UMA DATA
function validaData(data)
{
	if(data != ""){
		vet_data = data.split("/");
		dia = vet_data[0];
		mes = vet_data[1];
		ano = vet_data[2];
		if(dia > 31 || dia < 1)
		{
			retorno1 = false;	
		}else{
			retorno1 = true;
		}
		if(mes > 12 || mes < 1)
		{
			retorno2 = false;	
		}else{
			retorno2 = true;
		}
		if(ano.length < 4)
		{
			retorno3 = false;
		}else{
			retorno3 = true;
		}
		
		bi = (((ano%4==0)&&(ano%100!=0))||(ano%400==0))?29:28;
		dias_no_mes = [31,bi,31,30,31,30,31,31,30,31,30,31];
		if(dia > dias_no_mes[mes-1])
		{
			retorno4 = false;
		}else{
			retorno4 = true;
		}
		if(retorno1 && retorno2 && retorno3 && retorno4){
			return true;
		}else{
			return false;
		}
	}else{
		return false;	
	}
}

//VALIDADOR DE CPF
function validaCPF(cpf){
	var cpfVAL = "";
	var i;
	s = cpf;
	if(cpf != ""){
		if(s=="00000000000" || s=="11111111111" || s=="22222222222" || s=="33333333333" || s=="44444444444" || s=="55555555555" || s=="66666666666" || s=="77777777777" || s=="88888888888" || s=="99999999999"){
				cpfVAL = "F";
		}
		var c = s.substr(0,9);
		var dv = s.substr(9,2);
		var d1 = 0;
		for (i = 0; i < 9; i++){
			d1 += c.charAt(i)*(10-i);
		}
		if (d1 == 0){
			cpfVAL = "F";
		}
			d1 = 11 - (d1 % 11);
		if (d1 > 9){ 
			d1 = 0;
		}
		if (dv.charAt(0) != d1){
			cpfVAL = "F";
		}
		d1 *= 2;
		for (i = 0; i < 9; i++){
			d1 += c.charAt(i)*(11-i);
		}
		d1 = 11 - (d1 % 11);
		if (d1 > 9){d1 = 0;}
		if (dv.charAt(1) != d1){
			cpfVAL = "F";
		}
	}else{
		cpfVAL = "F";
	}
	if(cpfVAL == 'F'){
			cpfRETORNO = false;
	}else{
			cpfRETORNO = true;
	}
	return cpfRETORNO;
}

//FUN�AO PARA VALIDAR CNPJ
function validaCNPJ(CNPJ) {
	//CNPJ = document.validacao.CNPJID.value;
   erro = new String;
   if (CNPJ.length < 18) erro += "� necessario preencher corretamente o n�mero do CNPJ! \n\n"; 
   if ((CNPJ.charAt(2) != ".")  || (CNPJ.charAt(6) != ".")  || (CNPJ.charAt(10) != "/") ||(CNPJ.charAt(15) != "-"))
   {
   		if (erro.length == 0) erro += "� necess�rio preencher corretamente o n�mero do CNPJ! \n\n";
   }
    //substituir os caracteres que n�o s�o n�meros
    if(document.layers && parseInt(navigator.appVersion) == 4){
		x = CNPJ.substring(0,2);
		x += CNPJ.substring (3,6);
		x += CNPJ.substring (7,10);
		x += CNPJ.substring (11,15);
		x += CNPJ.substring (16,18);
		CNPJ = x; 
    } else {
		CNPJ = CNPJ.replace (".","");
		CNPJ = CNPJ.replace (".","");
		CNPJ = CNPJ.replace ("-","");
		CNPJ = CNPJ.replace ("/","");
    }
    var nonNumbers = /\D/;
    if (nonNumbers.test(CNPJ)) erro += "A verifica��o de CNPJ suporta apenas n�meros! \n\n"; 
    var a = [];
    var b = new Number;
    var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];
    for (i=0; i<12; i++)
	{
    	a[i] = CNPJ.charAt(i);
        b += a[i] * c[i+1];
 	}
    if ((x = b % 11) < 2) { a[12] = 0 } else { a[12] = 11-x }
    b = 0;
    for (y=0; y<13; y++) 
	{
    	b += (a[y] * c[y]); 
    }
    if ((x = b % 11) < 2) { a[13] = 0; } else { a[13] = 11-x; }
    if ((CNPJ.charAt(12) != a[12]) || (CNPJ.charAt(13) != a[13])){
    	erro +="D�gito verificador com problema!";
    }
    if (erro.length > 0){
		//alert(erro);
		return false;
    }
	
	/*
	else {
    	alert("CNPJ valido!");
    }
	*/
	
    return true;
}


//FORMATA VALORES
function formata_valor(cur,len)
{
   n='__0123456789';
   d=cur.value;
   l=d.length;
   r='';
   if (l > 0)
   {
    z=d.substr(0,l-1);
    s='';
    a=2;
    for (i=0; i < l; i++)
    {
        c=d.charAt(i);
        if (n.indexOf(c) > a)
        {
            a=1;
            s+=c;
        };
    };
    l=s.length;
    t=len-1;
    if (l > t)
    {
        l=t;
        s=s.substr(0,t);
    };
    if (l > 2)
    {
        r=s.substr(0,l-2)+','+s.substr(l-2,2);
    }
    else
    {
        if (l == 2)
        {
            r='0,'+s;
        }
        else
        {
            if (l == 1)
            {
                r='0,0'+s;
            };
        };
    };
    if (r == '')
    {
        r='0,00';
    }
    else
    {
        l=r.length;
        if (l > 6)
        {
            j=l%3;
            w=r.substr(0,j);
            wa=r.substr(j,l-j-6);
            wb=r.substr(l-6,6);
            if (j > 0)
            {
                w+='.';
            };
            k=(l-j)/3-2;
            for (i=0; i < k; i++)
            {
                w+=wa.substr(i*3,3)+'.';
            };
            r=w+wb;
        };
    };
   };
   if (r.length <= len)
   {
    cur.value=r;
   }
   else
   {
    cur.value=z;
   };
  // document.form.t4.value = "TESTE";
   //return 'ok';
}