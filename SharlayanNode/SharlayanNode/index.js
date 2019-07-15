var edge = require('edge-js');
var test = edge.func({
	source: function() {/*
        using System;
        using System.Diagnostics;
		using System.Threading;
        using System.Threading.Tasks;		
        using Sharlayan;
        using Sharlayan.Core;
        using Sharlayan.Models;
        using Sharlayan.Models.ReadResults;

        public class Startup
        {
            public async Task<object> Invoke(object input)
            {
                Process[] processes = Process.GetProcessesByName("ffxiv_dx11");
				System.Console.WriteLine("Doing it");
				if (processes.Length != 0)
				{
					System.Console.WriteLine("Setting Process");

					string gameLang = "English";
					bool useLocalCache = false;
					string patchVersion = "latest";

					Process process = processes[0];

					ProcessModel procModel = new ProcessModel
					{
						Process = process,
						IsWin64 = true
					};

					//console.log(procModel);
					MemoryHandler.Instance.SetProcess(procModel, gameLang, patchVersion, useLocalCache);
					Entrance.MemQuery();
				}
				
				return null;
            }
        
			static class Entrance
			{
				public static string MemQuery()
				{
				Start:
					Console.WriteLine("What are you looking for: ");
					Console.ReadLine();
					System.Console.WriteLine(Helper.GetName());
					System.Console.WriteLine(Helper.GetInv());
					goto Start;
				}
			}
			
			
			static class Helper
			{
				public static string GetName()
				{
					System.Console.WriteLine("Getting Name");
					Thread.Sleep(1000);
					CurrentPlayerResult res = Reader.GetCurrentPlayer();
					return res.CurrentPlayer.Name;
				}
				
				public static string GetInv()
				{
					System.Console.WriteLine("Getting Inv");
					Thread.Sleep(1000);
					InventoryResult res = Reader.GetInventory();
					foreach(InventoryContainer element in res.InventoryContainers){
						System.Console.WriteLine(element.ContainerType);
						// foreach(InventoryItem item in element.InventoryItems){
						// 	System.Console.WriteLine("SB Percent:");
						// 	System.Console.WriteLine(item.SBPercent);
						// 	System.Console.WriteLine("Slot:");
						// 	System.Console.WriteLine(item.Slot);
						// 	System.Console.WriteLine("- - - - - - - - - - -");
						// }
					}
					return String.Join(" ", res.InventoryContainers);
				}				

			}
			

        }
    */},
    references: ['Sharlayan1.dll', 'Nlog.dll', 'Newtonsoft.Json.dll', 'System.ValueTuple.dll']
});

test('JavaScript', function (error, result) {
    if (error) console.dir(error);
});