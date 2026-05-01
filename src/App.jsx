import "./App.css";
import { dppData } from "./data/dppData";
import InfoCard from "./components/InfoCard";
import DataTable from "./components/DataTable";
import Section from "./components/Section";

function App() {
  const productInfo = {
    產品類別: dppData.product.category,
    產品名稱: dppData.product.name,
    品牌: dppData.product.brand,
    型號: dppData.product.model,
    SKU: dppData.product.sku,
    序號: dppData.product.serialNumber,
    生產批號: dppData.product.batchNumber,
    製造日期: dppData.product.manufactureDate,
    上市日期: dppData.product.marketReleaseDate,
    預期使用壽命: `${dppData.product.expectedLifetimeYears} 年`,
    產品狀態: dppData.product.status,
  };

  const manufacturerInfo = {
    品牌商: dppData.manufacturer.brandOwner,
    製造商: dppData.manufacturer.manufacturerName,
    製造地點: dppData.manufacturer.manufacturingLocation,
    責任營運者: dppData.manufacturer.responsibleOperator,
    營運者識別碼: dppData.manufacturer.operatorId,
    聯絡信箱: dppData.manufacturer.contactEmail,
    客服網址: dppData.manufacturer.supportUrl,
  };

  return (
    <main className="page">
      <header className="hero">
        <div className="hero-content">
          <p className="badge">Digital Product Passport</p>
          <h1>{dppData.product.name}</h1>
          <p className="hero-subtitle">
            這是一份筆記型電腦的數位產品護照範例，包含產品識別、材料組成、
            永續指標、維修資訊與回收指引。
          </p>

          <div className="hero-meta">
            <span>Passport ID：{dppData.passportId}</span>
            <span>版本：v{dppData.version}</span>
            <span>更新日期：{dppData.lastUpdated}</span>
          </div>
        </div>

        <div className="passport-panel">
          <div className="qr-box">
            <span>QR</span>
          </div>
          <p>資料載體：{dppData.dataCarrier.type.join(" + ")}</p>
          <a href={dppData.dataCarrier.url} target="_blank" rel="noreferrer">
            查看線上護照
          </a>
        </div>
      </header>

      <Section
        eyebrow="01 / Product Identity"
        title="產品基本資料"
        description="用來辨識產品、批次與生命週期狀態的核心資料。"
      >
        <div className="grid two">
          <InfoCard title="產品識別" accent="blue">
            <DataTable data={productInfo} />
          </InfoCard>

          <InfoCard title="製造商與責任方" accent="purple">
            <DataTable data={manufacturerInfo} />
          </InfoCard>
        </div>
      </Section>

      <Section
        eyebrow="02 / Technical Profile"
        title="技術規格與零組件"
        description="呈現產品的主要硬體規格，以及可拆解零件與材料資訊。"
      >
        <div className="grid two">
          <InfoCard title="主要規格" accent="green">
            <DataTable
              data={{
                螢幕: dppData.technicalSpecifications.display,
                處理器: dppData.technicalSpecifications.processor,
                記憶體: dppData.technicalSpecifications.memory,
                儲存裝置: dppData.technicalSpecifications.storage,
                電池: dppData.technicalSpecifications.battery,
                機身材質: dppData.technicalSpecifications.bodyMaterial,
                重量: dppData.technicalSpecifications.weight,
                作業系統: dppData.technicalSpecifications.operatingSystem,
              }}
            />
          </InfoCard>

          <InfoCard title="零組件材料" accent="orange">
            <div className="component-list">
              {dppData.components.map((item) => (
                <article className="component-item" key={item.component}>
                  <strong>{item.component}</strong>
                  <p>{item.material}</p>
                  <small>
                    {item.removable}｜更換難度：{item.difficulty}
                  </small>
                </article>
              ))}
            </div>
          </InfoCard>
        </div>
      </Section>

      <Section
        eyebrow="03 / Sustainability"
        title="永續與合規資訊"
        description="包含碳足跡、再生材料比例、能源效率，以及主要合規狀態。"
      >
        <div className="grid two">
          <InfoCard title="環境指標" accent="green">
            <div className="metric-grid">
              {Object.entries(dppData.sustainability).map(([key, value]) => (
                <div className="metric" key={key}>
                  <span>{formatMetricLabel(key)}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </InfoCard>

          <InfoCard title="合規狀態" accent="blue">
            <div className="compliance-list">
              {dppData.compliance.map((item) => (
                <article className="compliance-item" key={item.name}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                  </div>
                  <span>{item.status}</span>
                </article>
              ))}
            </div>
          </InfoCard>
        </div>
      </Section>

      <Section
        eyebrow="04 / Repair & Lifecycle"
        title="維修、軟體支援與回收"
        description="讓產品更容易被維修、延長使用壽命，並在生命週期結束後妥善回收。"
      >
        <div className="grid three">
          <InfoCard title="維修資訊" accent="purple">
            <DataTable
              data={{
                可維修性評分: dppData.repairability.score,
                保固期限: dppData.repairability.warrantyYears,
                零件供應期限: dppData.repairability.sparePartsAvailability,
                使用者可更換零件:
                  dppData.repairability.userReplaceableParts.join("、"),
                授權維修零件:
                  dppData.repairability.authorizedRepairParts.join("、"),
                所需工具: dppData.repairability.requiredTools.join("、"),
              }}
            />
          </InfoCard>

          <InfoCard title="軟體與安全更新" accent="blue">
            <DataTable
              data={{
                出廠BIOS: dppData.software.factoryBiosVersion,
                最新BIOS: dppData.software.latestBiosVersion,
                韌體支援至: dppData.software.firmwareSupportUntil,
                安全更新至: dppData.software.securityUpdateUntil,
                驅動程式下載: dppData.software.driverDownloadUrl,
              }}
            />
          </InfoCard>

          <InfoCard title="回收資訊" accent="orange">
            <DataTable
              data={{
                回收分類: dppData.endOfLife.wasteCategory,
                是否含電池: dppData.endOfLife.containsBattery,
                電池拆卸方式: dppData.endOfLife.batteryRemovalInstruction,
                回收方式: dppData.endOfLife.recyclingOptions.join("、"),
                可回收材料: dppData.endOfLife.recoverableMaterials.join("、"),
                處理提醒: dppData.endOfLife.disposalWarning,
              }}
            />
          </InfoCard>
        </div>
      </Section>

      <Section
        eyebrow="05 / Raw Data"
        title="DPP 原始資料"
        description="以下 JSON 可作為 API、資料庫或 QR Code 後端頁面的資料基礎。"
      >
        <pre className="json-view">
          {JSON.stringify(dppData, null, 2)}
        </pre>
      </Section>
    </main>
  );
}

function formatMetricLabel(key) {
  const labels = {
    carbonFootprint: "產品碳足跡",
    recycledMaterialContent: "再生材料比例",
    recycledAluminumContent: "再生鋁比例",
    packagingRecyclability: "包裝可回收比例",
    plasticContent: "塑膠含量",
    energyEfficiencyClass: "能源效率等級",
    standbyPower: "待機功耗",
    annualEnergyConsumption: "年耗電量",
  };

  return labels[key] || key;
}

export default App;
